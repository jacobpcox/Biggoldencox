#!/usr/bin/env node
/*
 * Backfills game cover art from SteamGridDB for any game still missing an image
 * (e.g. Xbox / Xbox 360 / Xbox One / Switch, which Libretro/Steam don't cover).
 *
 * Needs a free API key:  https://www.steamgriddb.com/profile/preferences/api
 * Run:  STEAMGRIDDB_KEY=xxxxx node scripts/fetch-steamgriddb-art.js
 *
 * - Reads the existing images.json and skips games already covered.
 * - Searches SteamGridDB by title, grabs a vertical "grid" (box art), saves it
 *   into images/games/<slug>/<title>.png, and merges into images.json.
 */

const fs = require("fs");
const path = require("path");
const { CONSOLES, GAMES, consoleSlug } = require("../data.js");

const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "images", "games");
const KEY = process.env.STEAMGRIDDB_KEY;
if (!KEY) { console.error("Set STEAMGRIDDB_KEY (get one free at steamgriddb.com/profile/preferences/api)"); process.exit(1); }

const H = { headers: { "Authorization": "Bearer " + KEY, "User-Agent": "biggoldencox-art" } };
const slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// existing manifest (so we only fill gaps)
let manifest = { generated: null, games: {} };
try { manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "images.json"), "utf8")); } catch {}
manifest.games = manifest.games || {};

async function api(url) {
  const res = await fetch(url, H);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

async function searchId(term) {
  const j = await api(`https://www.steamgriddb.com/api/v2/search/autocomplete/${encodeURIComponent(term)}`);
  return (j.success && j.data && j.data[0] && j.data[0].id) || null;
}

async function gridUrl(id) {
  // prefer vertical box-art dimensions; fall back to any static grid
  const tries = [
    `https://www.steamgriddb.com/api/v2/grids/game/${id}?dimensions=600x900,342x482,660x930&types=static&nsfw=false&humor=false`,
    `https://www.steamgriddb.com/api/v2/grids/game/${id}?types=static&nsfw=false&humor=false`
  ];
  for (const u of tries) {
    try {
      const j = await api(u);
      if (j.success && j.data && j.data.length) return j.data[0].url;
    } catch { /* try next */ }
  }
  return null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": "biggoldencox-art" } });
  if (!res.ok) return false;
  if (!(res.headers.get("content-type") || "").startsWith("image/")) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) return false;
  fs.writeFileSync(dest, buf);
  return true;
}

(async () => {
  let got = 0, miss = 0;
  for (const c of CONSOLES) {
    const slug = consoleSlug(c);
    const list = GAMES[slug];
    if (!Array.isArray(list) || !list.length) continue;
    manifest.games[slug] = manifest.games[slug] || {};
    const dir = path.join(IMG_DIR, slug);
    let touched = false;
    for (const g of list) {
      if (manifest.games[slug][g.title]) continue;       // already have a cover
      const dest = path.join(dir, slugify(g.title) + ".png");
      const rel = `images/games/${slug}/${slugify(g.title)}.png`;
      try {
        const id = await searchId(g.title);
        if (!id) { console.log(`  miss  ${slug} :: ${g.title}`); miss++; await sleep(200); continue; }
        const url = await gridUrl(id);
        if (!url) { console.log(`  nogrid ${slug} :: ${g.title}`); miss++; await sleep(200); continue; }
        fs.mkdirSync(dir, { recursive: true });
        if (await download(url, dest)) { manifest.games[slug][g.title] = rel; got++; touched = true; }
        else { console.log(`  dlfail ${slug} :: ${g.title}`); miss++; }
      } catch (e) { console.log(`  err   ${slug} :: ${g.title} ${e.message}`); miss++; }
      await sleep(250);
    }
    if (touched) console.log(`= ${slug}: now ${Object.keys(manifest.games[slug]).length}/${list.length}`);
  }
  manifest.generated = new Date().toISOString();
  fs.writeFileSync(path.join(ROOT, "images.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nDone. +${got} covers, ${miss} still missing. Updated images.json`);
})().catch((e) => { console.error("Fatal:", e); process.exit(1); });
