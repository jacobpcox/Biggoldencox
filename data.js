// ===== biggoldencox — shared console & game data =====
// Used by both index.html (the Console Vault) and console.html (per-console pages).
// To add a console photo: drop an image in images/consoles/ and set the `img` path.
// The page slug for each console is derived from its image filename
//   e.g. images/consoles/nes.jpg  ->  slug "nes"  ->  console.html?c=nes

const CONSOLES = [
    {
        name: "Neo Geo / Omega Entertainment Machine",
        type: "console", year: 2025, price: 1200, qty: 1,
        accent: "#FFD700", icon: "🕹️", img: "images/consoles/omega-entertainment-machine.jpg",
        desc: "I love this system — it's a Neo Geo arcade board built to use as a home console, with all the power of the arcade cabinet. I have some good memories playing all the games without eating my quarters."
    },
    {
        name: "Atari 2600",
        type: "console", year: 2024, price: 160, qty: 1,
        accent: "#E60012", icon: "🕹️", img: "images/consoles/atari-2600.jpg",
        desc: "I bought this at an auction and got into a bidding war — ended up with a stellar deal. It came with all the games, the gaming booklets, and even the original purchase ad used to decide to buy the console. It even had a repair ticket from when it was a few years old and the amount paid. You can't beat the history that came with this console."
    },
    {
        name: "Super Nintendo",
        type: "console", year: 2025, price: 80, qty: 1,
        accent: "#E60012", icon: "🎮", img: "images/consoles/super-nintendo.jpg",
        desc: "A console I missed out on as a kid. I play Super Metroid with a friend on here, and bought the next one I saw that was in good condition — games are hard to find on the baby. Mega Man X has kicked my butt; I don't know if I'll finish it, lol."
    },
    {
        name: "Atari Jaguar",
        type: "console", year: 2025, price: 400, qty: 1,
        accent: "#E60012", icon: "🎮", img: "images/consoles/atari-jaguar.jpg",
        desc: "I bought this one because I love the controller. My friend bought the Doom port and doesn't even have the console — that's how I found out about it, near the beginning of my collection."
    },
    {
        name: "Sega Saturn",
        type: "console", year: 2026, price: 150, qty: 1,
        accent: "#66c0f4", icon: "🎮", img: "images/consoles/sega-saturn.jpg",
        desc: "The Sega Saturn is one of my newer consoles and I haven't actually gotten a chance to play it yet — but it's going to be a goody for sure."
    },
    {
        name: "PlayStation 1",
        type: "console", year: 2025, price: 80, qty: 1,
        accent: "#003791", icon: "🎮", img: "images/consoles/playstation-1.jpg",
        desc: "I played this as a kid but never had one, so I rebought it to play as an adult and give it the love it needs. Final Fantasy was one of the go-to games for a hang out back then."
    },
    {
        name: "PlayStation 2",
        type: "console", year: 2005, price: 0, qty: 1,
        accent: "#003791", icon: "🎮", img: "images/consoles/playstation-2.jpg",
        desc: "The PS2 was one of my favorites as a kid — so many good games. Some of my biggest memories are Guitar Hero 1 and 2 with my brother and his friends. I also spent a lot of time driving backwards to make cars lose races in NASCAR 06."
    },
    {
        name: "Nintendo GameCube",
        type: "console", year: 2002, price: 120, qty: 2,
        accent: "#5865F2", icon: "🎮", img: "images/consoles/gamecube.jpg",
        desc: "Another childhood console. I don't know if I can pick a favorite game, but WarioWare is probably one I spent some of the biggest amount of time on, trying to beat those mini games. I also spent so much time raising chao in Sonic Adventure 2 — both very important games."
    },
    {
        name: "Xbox",
        type: "console", year: 2003, price: 0, qty: 1,
        accent: "#107C10", icon: "🎮", img: "images/consoles/xbox.jpg",
        desc: "Halo 1 and 2 are the games of this console. My friends and I would spend hours with rocket launchers trying to build forts with movable objects — just for them to despawn the moment we got them in place."
    },
    {
        name: "Nintendo Wii",
        type: "console", year: 2008, price: 0, qty: 1,
        accent: "#66c0f4", icon: "🎮", img: "images/consoles/wii.jpg",
        desc: "Wii Sports was the go-to game when I was a kid. I spent so much time boxing that I'd break out in a sweat trying to beat my punching bag record."
    },
    {
        name: "Nintendo Entertainment System",
        type: "console", year: 1992, price: 0, qty: 2,
        accent: "#E60012", icon: "🎮", img: "images/consoles/nes.jpg",
        desc: "I played this a little as a kid, but later in life I found a love for Zelda 1 — and it has some other great titles. I also really like throwing papers at people's windows in Paperboy."
    },
    {
        name: "Sega Genesis",
        type: "console", year: 2025, price: 100, qty: 2,
        accent: "#66c0f4", icon: "🎮", img: "images/consoles/genesis.jpg",
        desc: "A newer console in my collection — I haven't played much, but my girlfriend got me my first game on it right before we started dating, so it has a special place in my heart. We bought that and the Neo Geo the same day, some of our first memories together."
    },
    {
        name: "Xbox 360",
        type: "console", year: 2006, price: 0, qty: 2,
        accent: "#107C10", icon: "🎮", img: "images/consoles/xbox-360.jpg",
        desc: "Oh man, the Xbox 360. 8th grade through high school I'd play so much — I'd skip doing my homework just to have more time, and stay up all night playing Xbox Live with my friends."
    },
    {
        name: "Xbox One",
        type: "console", year: 2013, price: 1000, qty: 2,
        accent: "#107C10", icon: "🎮", img: "images/consoles/xbox-one.jpg",
        desc: "I got the Xbox One day one — preordered it with a friend and we drove 45 minutes to the nearest GameStop we could find with it, just to have it day one. We were so excited, only to find out the thing we really loved about the Xbox 360 was our friends, who weren't on Xbox One."
    },
    {
        name: "Nintendo 64",
        type: "console", year: 1997, price: 100, qty: 3,
        accent: "#E60012", icon: "🎮", img: "images/consoles/n64.jpg",
        desc: "The N64 was a childhood console I've had my entire life. Played so many games on this bad boy — GoldenEye 64 and Zelda: Ocarina of Time are my favorites, but there are so many."
    },
    {
        name: "Sega Master System",
        type: "console", year: 2026, price: 120, qty: null,
        accent: "#66c0f4", icon: "🎮", img: "images/consoles/sega-master-system.jpg",
        desc: "One of my newer systems that I haven't played yet. I was so excited when I found it at the coolest retro game shop — I got overwhelmed with the inventory in there and wanted to buy so much."
    },
    {
        name: "Nintendo Switch",
        type: "console", year: 2016, price: 0, qty: null,
        accent: "#E60012", icon: "🎮", img: "images/consoles/nintendo-switch.jpg",
        desc: "I love Mario Party and Mario Golf — they're among some of my favorite things to do with friends."
    },
    {
        name: "Game Boy Color",
        type: "handheld", year: 2000, price: 0, qty: 1,
        accent: "#E60012", icon: "👾", img: "images/consoles/game-boy-color.jpg",
        desc: "My childhood handheld. I'd sneak it into daycare and play in the playground tube with one of my childhood friends."
    },
    {
        name: "Game Boy Advance",
        type: "handheld", year: 2002, price: 0, qty: 1,
        accent: "#5865F2", icon: "👾", img: "images/consoles/game-boy-advance.jpg",
        desc: "I'd always steal this from my brother — I could play my Game Boy Color games, but using my brother's Advance to make him mad was the real fun."
    },
    {
        name: "Nintendo DS",
        type: "handheld", year: 2025, price: 50, qty: 1,
        accent: "#E60012", icon: "👾", img: "images/consoles/nintendo-ds.jpg",
        desc: "I haven't played the one I have, but I'd play Mario Kart DS so much at a friend's house when we were kids — he'd get mad. I was also so jealous of everyone and their PictoChat that I had to buy it as an adult."
    },
    {
        name: "PSP",
        type: "handheld", year: 2006, price: 0, qty: 1,
        accent: "#003791", icon: "👾", img: "images/consoles/psp.jpg",
        desc: "I had to get this handheld as soon as I saw a friend play GTA on a school field trip. I could never convince my parents to buy GTA for me, so my favorite game was LEGO Star Wars 3 — I'd play it in bed instead of sleeping."
    },
    {
        name: "Steam Deck",
        type: "handheld", year: 2022, price: 500, qty: 1,
        accent: "#66c0f4", icon: "👾", img: "images/consoles/steam-deck.jpg",
        desc: "I saw how open this device was and knew it needed to be in my collection for gaming on the go. I have every emulator on it and it's great for playing the classics without lugging all the devices around."
    },
    {
        name: "Arcade1Up Golden Tee Golf",
        type: "arcade", year: 2023, price: 500, qty: 1,
        accent: "#FFD700", icon: "🕹️", img: "images/consoles/arcade-golden-tee.jpg",
        desc: "I've been playing Golden Tee Golf since I was a young kid, and as soon as I found an affordable home version I had to get it — even though I probably could have bought it many times over with the quarters I spent over the years."
    },
    {
        name: "Arcade1Up Big Buck Hunter",
        type: "arcade", year: 2024, price: 0, qty: 1,
        accent: "#E67E22", icon: "🕹️", img: "images/consoles/arcade-big-buck-hunter.jpg",
        desc: "Big Buck Hunter is a great game — the aiming will get me every time, but I always liked playing and thought it was a must-have for my collection. It's a game my dad and I would play when we were out and about, so I thought, why not have the ability to play it at home."
    }
];

// Original hardware release year for each system (shown in the badge, and used to sort the vault).
const RELEASE_YEAR = {
    "Neo Geo / Omega Entertainment Machine": 1990,
    "Steam Deck": 2022,
    "Arcade1Up Golden Tee Golf": 1989,
    "Arcade1Up Big Buck Hunter": 2000,
    "Atari 2600": 1977,
    "Nintendo Entertainment System": 1985,
    "Sega Master System": 1986,
    "Super Nintendo": 1991,
    "Sega Genesis": 1989,
    "Nintendo 64": 1996,
    "Atari Jaguar": 1993,
    "Sega Saturn": 1994,
    "PlayStation 1": 1994,
    "PlayStation 2": 2000,
    "Nintendo GameCube": 2001,
    "Xbox": 2001,
    "Nintendo Wii": 2006,
    "Xbox 360": 2005,
    "Xbox One": 2013,
    "Nintendo Switch": 2017,
    "Game Boy Color": 1998,
    "Game Boy Advance": 2001,
    "Nintendo DS": 2004,
    "PSP": 2004
};

// Slug for a console = its image filename without folder/extension (e.g. "nes").
function consoleSlug(c) {
    return c.img.split("/").pop().replace(/\.[a-z0-9]+$/i, "");
}
function findConsole(slug) {
    return CONSOLES.find(c => consoleSlug(c) === slug) || null;
}

// ===== Games per console =====
// Fill in each array to populate that console's page. Each game card shows:
// image, title, a star rating, and the price paid. Game object shape:
//   { title: "Game Name", img: "images/games/<slug>/<file>.jpg", rating: 4.5, price: 30 }
// - `img` is optional (falls back to a "Photo coming soon" placeholder).
// - `rating` is 0–5 (decimals allowed, e.g. 4.5); omit it to show "Unrated".
// - `price` is a number; use 0 for "Gift / Free"; omit it to hide the price tag.
// - Leave an array empty [] to show a "Games coming soon" message on that console's page.
const GAMES = {
    "omega-entertainment-machine": [],
    "atari-2600": [],
    "super-nintendo": [],
    "atari-jaguar": [],
    "sega-saturn": [],
    "playstation-1": [],
    "playstation-2": [],
    "gamecube": [],
    "xbox": [],
    "wii": [],
    "nes": [],
    "genesis": [],
    "xbox-360": [],
    "xbox-one": [],
    "n64": [],
    "sega-master-system": [],
    "nintendo-switch": [],
    "game-boy-color": [],
    "game-boy-advance": [],
    "nintendo-ds": [],
    "psp": [],
    "steam-deck": [],
    "arcade-golden-tee": [],
    "arcade-big-buck-hunter": []
};
