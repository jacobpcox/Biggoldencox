#!/usr/bin/env node
/*
 * Downloads game cover art (free, no API key) and writes images.json.
 *  - Console games: Libretro Thumbnails (Named_Boxarts) on GitHub.
 *  - Steam Deck games: Steam store cover (library_600x900) via the Steam storesearch endpoint.
 *
 * Run:  node scripts/fetch-game-art.js
 * Re-runs are cheap: GitHub tree listings are cached in .imgtmp/trees/, and
 * games that already have an image file are skipped.
 *
 * Output:
 *  - images/games/<slug>/<game>.{png,jpg}
 *  - images.json  (manifest: { games: { <slug>: { <title>: <path> } } })
 */

const fs = require("fs");
const path = require("path");
const { CONSOLES, GAMES, consoleSlug } = require("../data.js");

const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "images", "games");
const CACHE = path.join(ROOT, ".imgtmp", "trees");
fs.mkdirSync(CACHE, { recursive: true });

// slug -> Libretro thumbnails repo name (only systems Libretro covers)
const LIBRETRO = {
  "atari-2600": "Atari_-_2600",
  "atari-jaguar": "Atari_-_Jaguar",
  "nes": "Nintendo_-_Nintendo_Entertainment_System",
  "super-nintendo": "Nintendo_-_Super_Nintendo_Entertainment_System",
  "n64": "Nintendo_-_Nintendo_64",
  "gamecube": "Nintendo_-_GameCube",
  "wii": "Nintendo_-_Wii",
  "game-boy-color": "Nintendo_-_Game_Boy_Color",
  "nintendo-ds": "Nintendo_-_Nintendo_DS",
  "genesis": "Sega_-_Mega_Drive_-_Genesis",
  "sega-saturn": "Sega_-_Saturn",
  "playstation-1": "Sony_-_PlayStation",
  "playstation-2": "Sony_-_PlayStation_2",
  "omega-entertainment-machine": "SNK_-_Neo_Geo"
};

const slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/\([^)]*\)/g, "").replace(/\[[^\]]*\]/g, "")
  .toLowerCase()
  .replace(/,\s+(the|a|an)\b/g, "")   // No-Intro form: "Legend of Zelda, The" -> "Legend of Zelda"
  .replace(/^\s*(the|a|an)\b/, "")     // leading article: "The Legend of Zelda" -> "Legend of Zelda"
  .replace(/&/g, "and")
  .replace(/[^a-z0-9]/g, "");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function ghJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": "biggoldencox-art", "Accept": "application/vnd.github+json" } });
  if (!res.ok) throw new Error("GitHub HTTP " + res.status + " for " + url);
  return res.json();
}

// Returns array of Named_Boxarts filenames for a Libretro system (cached).
async function boxartList(repo) {
  const cacheFile = path.join(CACHE, slugify(repo) + ".json");
  if (fs.existsSync(cacheFile)) return JSON.parse(fs.readFileSync(cacheFile, "utf8"));
  const enc = encodeURIComponent(repo);
  const root = await ghJson(`https://api.github.com/repos/libretro-thumbnails/${enc}/git/trees/master`);
  const folder = (root.tree || []).find((t) => t.path === "Named_Boxarts" && t.type === "tree");
  if (!folder) { fs.writeFileSync(cacheFile, "[]"); return []; }
  const sub = await ghJson(`https://api.github.com/repos/libretro-thumbnails/${enc}/git/trees/${folder.sha}`);
  const files = (sub.tree || []).filter((t) => t.type === "blob").map((t) => t.path);
  fs.writeFileSync(cacheFile, JSON.stringify(files));
  await sleep(800);
  return files;
}

const BAD = /\((beta|proto|prototype|demo|sample|aftermarket|unl|pirate|hack|kiosk|competition)\b/i;
function rank(f) {
  let s = 0;
  if (/\(USA/i.test(f)) s -= 100;
  else if (/\(World/i.test(f)) s -= 90;
  else if (/\(USA,/i.test(f)) s -= 85;
  else if (/\(Europe/i.test(f)) s -= 50;
  else if (/\(Japan/i.test(f)) s -= 20;
  if (/\(Rev/i.test(f)) s += 5;
  s += (f.match(/\(/g) || []).length;   // fewer parenthetical tags is better
  s += f.length * 0.001;                // shorter wins ties
  return s;
}
function pick(hits) {
  if (!hits.length) return null;
  let h = hits.filter((f) => !BAD.test(f));
  if (!h.length) h = hits;
  return h.sort((a, b) => rank(a) - rank(b))[0];
}
function bestMatch(title, files) {
  const key = norm(title);
  // 1) exact normalized match
  let hits = files.filter((f) => norm(f.replace(/\.[a-z0-9]+$/i, "")) === key);
  if (hits.length) return pick(hits);
  // 2) subtitle fallback: filename starts with the title (e.g. "Wave Race 64 - Kawasaki Jet Ski")
  if (key.length >= 6) {
    hits = files.filter((f) => norm(f.replace(/\.[a-z0-9]+$/i, "")).startsWith(key));
    if (hits.length) return pick(hits);
  }
  return null;
}

async function fetchImage(url, headers) {
  const res = await fetch(url, { headers: { "User-Agent": "biggoldencox-art", ...headers } });
  if (!res.ok) return { ok: false, reason: "HTTP " + res.status };
  const ct = res.headers.get("content-type") || "";
  const buf = Buffer.from(await res.arrayBuffer());
  if (ct.startsWith("image/") && buf.length >= 1000) return { ok: true, buf };
  return { ok: false, reason: "type " + ct, lfs: ct.startsWith("text/") };
}

async function download(url, dest, headers = {}) {
  let r = await fetchImage(url, headers);
  // Git LFS pointer? retry via the media host which resolves LFS content.
  if (!r.ok && r.lfs && url.includes("raw.githubusercontent.com")) {
    r = await fetchImage(url.replace("raw.githubusercontent.com", "media.githubusercontent.com/media"), headers);
  }
  if (!r.ok) { if (process.env.DEBUG) console.log(`    [dl] ${r.reason} ${url}`); return false; }
  fs.writeFileSync(dest, r.buf);
  return true;
}

async function steamAppId(term) {
  const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(term)}&cc=us&l=en`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return null;
    const j = await res.json();
    return (j.items && j.items[0] && j.items[0].id) || null;
  } catch { return null; }
}

(async () => {
  // Merge into the existing manifest so covers from other sources (e.g. SteamGridDB) aren't lost.
  let manifest = { games: {} };
  try { manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "images.json"), "utf8")); manifest.games = manifest.games || {}; } catch { /* none yet */ }
  manifest.generated = new Date().toISOString();
  let got = 0, missed = 0;

  // ---- Libretro console games ----
  for (const [slug, repo] of Object.entries(LIBRETRO)) {
    const list = GAMES[slug];
    if (!Array.isArray(list) || !list.length) continue;
    let files = [];
    try { files = await boxartList(repo); }
    catch (e) { console.log(`! ${slug}: ${e.message}`); continue; }
    const dir = path.join(IMG_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });
    manifest.games[slug] = manifest.games[slug] || {};
    for (const g of list) {
      const file = path.join(dir, slugify(g.title) + ".png");
      const rel = `images/games/${slug}/${slugify(g.title)}.png`;
      if (fs.existsSync(file)) { manifest.games[slug][g.title] = rel; got++; continue; }
      const match = bestMatch(g.title, files);
      if (!match) { console.log(`  miss  ${slug} :: ${g.title}`); missed++; continue; }
      const raw = `https://raw.githubusercontent.com/libretro-thumbnails/${encodeURIComponent(repo)}/master/Named_Boxarts/${encodeURIComponent(match)}`;
      try {
        if (await download(raw, file)) { manifest.games[slug][g.title] = rel; got++; }
        else { console.log(`  dlfail ${slug} :: ${g.title}`); missed++; }
      } catch (e) { console.log(`  err   ${slug} :: ${g.title} ${e.message}`); missed++; }
      await sleep(150);
    }
    console.log(`= ${slug}: ${Object.keys(manifest.games[slug]).length}/${list.length}`);
  }

  // ---- Steam Deck (Steam covers) ----
  const steam = GAMES["steam-deck"] || [];
  if (steam.length) {
    const dir = path.join(IMG_DIR, "steam-deck");
    fs.mkdirSync(dir, { recursive: true });
    manifest.games["steam-deck"] = manifest.games["steam-deck"] || {};
    for (const g of steam) {
      const file = path.join(dir, slugify(g.title) + ".jpg");
      const rel = `images/games/steam-deck/${slugify(g.title)}.jpg`;
      if (fs.existsSync(file)) { manifest.games["steam-deck"][g.title] = rel; got++; continue; }
      const appid = await steamAppId(g.title);
      if (!appid) { console.log(`  miss  steam-deck :: ${g.title}`); missed++; await sleep(250); continue; }
      const urls = [
        `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/library_600x900.jpg`,
        `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`
      ];
      let ok = false;
      for (const u of urls) { if (await download(u, file)) { ok = true; break; } }
      if (ok) { manifest.games["steam-deck"][g.title] = rel; got++; }
      else { console.log(`  dlfail steam-deck :: ${g.title} (appid ${appid})`); missed++; }
      await sleep(250);
    }
    console.log(`= steam-deck: ${Object.keys(manifest.games["steam-deck"]).length}/${steam.length}`);
  }

  fs.writeFileSync(path.join(ROOT, "images.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nDone. ${got} covers, ${missed} missing. Wrote images.json`);
})().catch((e) => { console.error("Fatal:", e); process.exit(1); });
