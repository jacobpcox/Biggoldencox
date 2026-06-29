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
        type: "handheld", year: 2022, price: 650, qty: 1,
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
//   { title: "Game Name", img: "images/games/<slug>/<file>.jpg", rating: 4.5, price: 30, players: "1-4" }
// - `players` is optional (e.g. "1", "1-2", "1-4", "1-4 + online"); shown under the title.
// - `img` is optional (falls back to a "Photo coming soon" placeholder).
// - `rating` is 0–5 (decimals allowed, e.g. 4.5); omit it to show "Unrated".
// - `price` is a number; use 0 for "Gift / Free"; omit it to hide the price tag.
// - Leave an array empty [] to show a "Games coming soon" message on that console's page.
const GAMES = {
    "omega-entertainment-machine": [
        { title: "The King of Fighters 2000", price: 0 },
        { title: "Super N-in-1 SNK Multicart", rating: 5, price: 0 }
    ],
    "atari-2600": [
        { title: "Asteroids", price: 0 },
        { title: "Bridge", price: 0 },
        { title: "Miniature Golf", price: 0 },
        { title: "Basic Programming", price: 0 },
        { title: "Codebreaker", price: 0 },
        { title: "Megamania", price: 0 },
        { title: "Codebreaker", price: 0 },
        { title: "Space Combat", price: 0 },
        { title: "Tank Plus", price: 0 },
        { title: "Speedway II", price: 0 },
        { title: "Space Invaders", price: 0 },
        { title: "Super Breakout", price: 0 },
        { title: "Backgammon", price: 0 },
        { title: "Pac-Man", price: 0 },
        { title: "Spelling", price: 0 },
        { title: "Asteroids", price: 0 },
        { title: "Missile Command", price: 0 },
        { title: "Pac-Man", price: 0 },
        { title: "Chopper Command", price: 0 },
        { title: "Donkey Kong", price: 0 },
        { title: "Warlords", price: 0 },
        { title: "E.T. the Extra-Terrestrial", price: 0 },
        { title: "Video Chess", price: 0 },
        { title: "Sky Diver", price: 0 },
        { title: "Star Raiders", price: 0 },
        { title: "Adventure", price: 0 },
        { title: "Stellar Track", price: 0 },
        { title: "Laser Blast", price: 0 },
        { title: "Brain Games", price: 0 },
        { title: "Memory Match", price: 0 },
        { title: "Space Jockey", price: 0 },
        { title: "Target Fun", price: 0 },
        { title: "Basketball", price: 0 },
        { title: "Pong Sports", price: 0 }
    ],
    "super-nintendo": [
        { title: "Mega Man X", price: 40 },
        { title: "Super Game Boy", price: 30 },
        { title: "The Legend of Zelda: A Link to the Past", price: 40 },
        { title: "Super Mario World", price: 40 },
        { title: "Attack of the PETSCII Robots", price: 40 },
        { title: "Final Fight", price: 15 }
    ],
    "atari-jaguar": [
        { title: "Alien vs Predator", price: 30 },
        { title: "Iron Soldier", price: 30 },
        { title: "Wolfenstein 3D" }
    ],
    "sega-saturn": [
        { title: "Blazing Heroes", price: 35 }
    ],
    "playstation-1": [
        { title: "Iron Man and X-O Manowar in Heavy Metal", price: 0 }
    ],
    "playstation-2": [
        { title: "Tekken Tag Tournament", price: 0 },
        { title: "Orphen: Scion of Sorcery", price: 0 },
        { title: "Sly 2: Band of Thieves", rating: 5, price: 20 },
        { title: "Grand Theft Auto: Vice City", rating: 5, price: 0 },
        { title: "NASCAR 2005: Chase for the Cup", price: 0 },
        { title: "The Simpsons: Road Rage", rating: 4, price: 0 },
        { title: "2006 FIFA World Cup", price: 0 },
        { title: "NBA 08", price: 0 },
        { title: "Need for Speed: Underground 2", rating: 4, price: 0 },
        { title: "Need for Speed: ProStreet", price: 0 },
        { title: "FIFA Soccer 08", price: 0 }
    ],
    "gamecube": [
        { title: "WarioWare, Inc.: Mega Party Game$!", rating: 5, price: 0 },
        { title: "Mario Kart: Double Dash!!", rating: 5, price: 0 },
        { title: "Mario Superstar Baseball", rating: 5, price: 0 },
        { title: "Sonic Mega Collection", rating: 3, price: 0 },
        { title: "Tak 2: The Staff of Dreams", price: 0 },
        { title: "The Ant Bully", price: 0 },
        { title: "Harry Potter and the Chamber of Secrets", price: 0 },
        { title: "Spider-Man 2", rating: 5, price: 0 },
        { title: "Madagascar", price: 0 },
        { title: "Donkey Kong Jungle Beat", rating: 5, price: 0 },
        { title: "007: NightFire", price: 0 },
        { title: "SpongeBob SquarePants: The Movie", rating: 5, price: 0 },
        { title: "Tony Hawk's Underground 2", price: 0 },
        { title: "Over the Hedge", price: 0 },
        { title: "Shrek 2", price: 0 },
        { title: "Super Smash Bros. Melee", rating: 5, price: 60 },
        { title: "Sonic Adventure 2: Battle", rating: 5, price: 40 },
        { title: "The Legend of Zelda: Twilight Princess", rating: 5, price: 120 },
        { title: "Paper Mario: The Thousand-Year Door", rating: 5, price: 20 },
        { title: "Mario Party 4", rating: 5, price: 50 }
    ],
    "xbox": [
        { title: "Shrek SuperSlam", price: 0 },
        { title: "Madden NFL 06", price: 0 },
        { title: "Halo", rating: 5, price: 0 },
        { title: "Halo 2", rating: 5, price: 0 }
    ],
    "wii": [
        { title: "Mario & Sonic at the Olympic Games", price: 0 },
        { title: "Guitar Hero III: Legends of Rock", rating: 4, price: 0 },
        { title: "Wii Play", rating: 3, price: 0 },
        { title: "Pirates of the Caribbean: At World's End", rating: 3, price: 0 },
        { title: "Cabela's Big Game Hunter 2010", price: 0 },
        { title: "Wii Sports", rating: 5, price: 0 }
    ],
    "nes": [
        { title: "Zelda II: The Adventure of Link", rating: 4, price: 0 },
        { title: "Game Genie", rating: 5, price: 0 },
        { title: "Tetris", rating: 5, price: 0 },
        { title: "Super Mario Bros. 3", rating: 5, price: 0 },
        { title: "The Legend of Zelda", rating: 5, price: 0 },
        { title: "Super Mario Bros.", rating: 5, price: 0 },
        { title: "Duck Hunt", rating: 5, price: 0 },
        { title: "The Simpsons: Bart vs. the Space Mutants", price: 8 },
        { title: "Track Meet", price: 0 },
        { title: "10-Yard Fight", rating: 5 }
    ],
    "genesis": [
        { title: "Contra: Hard Corps", price: 0 },
        { title: "Mortal Kombat", price: 0 },
        { title: "Sonic Spinball", price: 8 }
    ],
    "xbox-360": [
        { title: "Toy Story 3", price: 0 },
        { title: "Wipeout 2", price: 0 },
        { title: "WALL-E", price: 0 },
        { title: "The Elder Scrolls V: Skyrim", price: 0 },
        { title: "Rock Band 2", rating: 4, price: 0 },
        { title: "Red Dead Redemption", rating: 4, price: 20 },
        { title: "LEGO Indiana Jones", price: 0 },
        { title: "Kung Fu Panda", price: 0 },
        { title: "Borderlands 2", rating: 5, price: 60 },
        { title: "Battlefield 3", rating: 5, price: 60 },
        { title: "Grand Theft Auto V", rating: 5, price: 60 },
        { title: "Grand Theft Auto IV", rating: 5, price: 0 },
        { title: "Kinect Sports", price: 0 },
        { title: "Hole in the Wall", price: 0 },
        { title: "Payday 2", rating: 5, price: 40 },
        { title: "Monopoly", price: 0 },
        { title: "NCAA Football 11", price: 0 },
        { title: "NBA 2K11", price: 0 },
        { title: "Monopoly Streets", price: 0 },
        { title: "Halo: Combat Evolved Anniversary", rating: 5, price: 40 },
        { title: "Halo 3", rating: 5, price: 0 },
        { title: "Halo Wars", rating: 5, price: 0 },
        { title: "Halo 3: ODST", rating: 5, price: 0 },
        { title: "Halo 4", rating: 5, price: 60 },
        { title: "Fallout 3", rating: 3, price: 0 },
        { title: "Far Cry 3", rating: 5, price: 60 },
        { title: "Forza Horizon", rating: 5, price: 60 },
        { title: "Grand Theft Auto IV", rating: 5, price: 40 },
        { title: "Call of Duty: Black Ops", rating: 5, price: 60 },
        { title: "Call of Duty: Black Ops II", rating: 5, price: 60 },
        { title: "Call of Duty: Modern Warfare 2", rating: 3, price: 60 },
        { title: "Call of Duty: Modern Warfare 3", rating: 3, price: 60 },
        { title: "Command & Conquer 3: Tiberium Wars", rating: 5, price: 20 },
        { title: "Dead Island", rating: 5, price: 60 },
        { title: "Dead Island: Riptide", rating: 3, price: 60 },
        { title: "Kinect Adventures!", price: 0 },
        { title: "L.A. Noire", rating: 3, price: 30 },
        { title: "Left 4 Dead", price: 15 },
        { title: "Mafia II", rating: 5, price: 15 },
        { title: "Midnight Club: Los Angeles", rating: 5, price: 15 }
    ],
    "xbox-one": [
        { title: "Titanfall", rating: 3, price: 60 },
        { title: "Tom Clancy's Rainbow Six Siege", rating: 5, price: 60 },
        { title: "Tom Clancy's The Division", rating: 2, price: 60 },
        { title: "Sea of Thieves", rating: 5, price: 60 },
        { title: "The Elder Scrolls Online: Tamriel Unlimited", price: 60 },
        { title: "State of Decay 2", price: 20 },
        { title: "Red Dead Redemption II", rating: 4, price: 60 },
        { title: "Battlefield Hardline", rating: 5, price: 40 },
        { title: "Forza Horizon 2", rating: 5, price: 60 },
        { title: "Just Cause 3", rating: 3, price: 0 },
        { title: "Battlefield V", rating: 3, price: 60 },
        { title: "Battlefield 1", rating: 3, price: 60 },
        { title: "Battlefield 4", rating: 3, price: 60 },
        { title: "Halo: The Master Chief Collection", rating: 5, price: 0 },
        { title: "Star Wars Battlefront", price: 0 },
        { title: "Call of Duty: Modern Warfare", rating: 5, price: 60 },
        { title: "Cyberpunk 2077", rating: 2, price: 0 },
        { title: "Destiny", rating: 5, price: 60 },
        { title: "Destiny 2", rating: 5, price: 60 },
        { title: "Dying Light", rating: 5, price: 0 },
        { title: "Fallout 4", rating: 5, price: 60 },
        { title: "Fallout 76", rating: 3, price: 0 },
        { title: "Far Cry 4", rating: 3, price: 60 },
        { title: "Forza Horizon 3", rating: 5, price: 60 },
        { title: "Forza Motorsport 5", rating: 3, price: 0 },
        { title: "Grand Theft Auto V", rating: 5, price: 0 },
        { title: "Halo 5: Guardians", rating: 3, price: 60 },
        { title: "Halo Wars 2", rating: 3, price: 60 }
    ],
    "n64": [
        { title: "The Legend of Zelda: Ocarina of Time", rating: 5, price: 0 },
        { title: "Super Mario 64", rating: 5, price: 0 },
        { title: "Paperboy", rating: 3, price: 0 },
        { title: "WWF WrestleMania 2000", rating: 2, price: 0 },
        { title: "Mortal Kombat Mythologies: Sub-Zero", rating: 2, price: 20 },
        { title: "Tarzan", price: 0 },
        { title: "Madden NFL 99", price: 0 },
        { title: "Mia Hamm Soccer 64", price: 0 },
        { title: "A Bug's Life", price: 0 },
        { title: "Bass Hunter 64", rating: 2, price: 0 },
        { title: "NFL Blitz 2000", price: 0 },
        { title: "Pokémon Stadium 2", rating: 5, price: 80 },
        { title: "Mario Party", rating: 5, price: 40 },
        { title: "Monster Truck Madness 64", rating: 2, price: 0 },
        { title: "Pokémon Stadium", rating: 5, price: 30 },
        { title: "GoldenEye 007", rating: 5, price: 0 },
        { title: "Star Wars Episode I: Racer", price: 0 },
        { title: "Superman 64", price: 20 },
        { title: "Mario Kart 64", rating: 5, price: 0 },
        { title: "Super Smash Bros.", rating: 5, price: 0 },
        { title: "Wave Race 64", price: 0 },
        { title: "Dark Rift", price: 0 },
        { title: "San Francisco Rush 2049", price: 0 }
    ],
    "sega-master-system": [],
    "nintendo-switch": [
        { title: "Super Mario Odyssey", rating: 3, price: 0 },
        { title: "Mario Kart 8 Deluxe", rating: 5, price: 0 },
        { title: "Stardew Valley", rating: 5, price: 20 }
    ],
    "game-boy-color": [
        { title: "Pokémon Blue", rating: 5, price: 0 },
        { title: "Tetris Blast", rating: 5, price: 10 },
        { title: "Tony Hawk's Pro Skater", price: 0 },
        { title: "Rugrats in Paris", rating: 3, price: 0 },
        { title: "Who Wants to Be a Millionaire", rating: 2, price: 0 },
        { title: "Pokémon Gold" }
    ],
    "game-boy-advance": [
        { title: "Pokémon FireRed" }
    ],
    "nintendo-ds": [
        { title: "The Legend of Zelda: Phantom Hourglass", price: 25 },
        { title: "Brain Age", rating: 3 },
        { title: "Personal Trainer: Cooking", rating: 3 }
    ],
    "psp": [],
    "steam-deck": [
        { title: "7 Days to Die", rating: 4, price: 14 },
        { title: "Ace of Spades", price: 3 },
        { title: "Among Us", rating: 4, price: 14 },
        { title: "Ark: Survival Evolved", rating: 4, price: 15 },
        { title: "Arma 2", price: 24 },
        { title: "Baldur's Gate 3", rating: 5, price: 60 },
        { title: "Borderlands 2", rating: 5, price: 5 },
        { title: "Borderlands: The Pre-Sequel", rating: 3, price: 5 },
        { title: "Call of Duty", rating: 3, price: 70 },
        { title: "Car Mechanic Simulator 2014", price: 3.74 },
        { title: "Contagion", price: 5 },
        { title: "Content Warning", price: 6.39 },
        { title: "Cookie Clicker", rating: 4, price: 5 },
        { title: "Crawl", price: 5 },
        { title: "Dota 2", price: 0 },
        { title: "Fallout 76", rating: 3, price: 10 },
        { title: "The Forest", price: 15 },
        { title: "Game Dev Tycoon", rating: 5, price: 8.5 },
        { title: "Garfield Kart", price: 14 },
        { title: "Garry's Mod", rating: 5, price: 10 },
        { title: "Genital Jousting", rating: 3, price: 10 },
        { title: "Grand Theft Auto IV", rating: 5, price: 6 },
        { title: "Hacker Evolution", price: 2 },
        { title: "Halo: The Master Chief Collection", rating: 5, price: 14 },
        { title: "Hell Let Loose", rating: 4, price: 68 },
        { title: "Tabletop Simulator", rating: 5, price: 15 },
        { title: "Killing Floor", price: 8.5 },
        { title: "Hogwarts Legacy", rating: 4, price: 70 },
        { title: "The Jackbox Party Pack", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 2", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 3", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 4", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 5", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 6", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 7", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 8", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 9", rating: 3, price: 12 },
        { title: "The Jackbox Party Pack 10", rating: 3, price: 12 },
        { title: "Kerbal Space Program", rating: 5, price: 16 },
        { title: "Left 4 Dead", rating: 5, price: 15 },
        { title: "Left 4 Dead 2", rating: 5, price: 8.5 },
        { title: "Mini Motorways", rating: 5, price: 15 },
        { title: "Mount Your Friends", rating: 3, price: 5 },
        { title: "Move or Die", rating: 3, price: 10 },
        { title: "Payday 2", rating: 4, price: 6 },
        { title: "Phasmophobia", rating: 4, price: 10 },
        { title: "Pico Park", rating: 4, price: 14 },
        { title: "Portal", price: 1 },
        { title: "Portal 2", price: 1 },
        { title: "Red Dead Redemption 2", rating: 4, price: 30 },
        { title: "Remnant: From the Ashes", price: 0 },
        { title: "RimWorld", price: 15 },
        { title: "Robocraft", rating: 3, price: 0 },
        { title: "RollerCoaster Tycoon", rating: 5, price: 8.5 },
        { title: "Satisfactory", rating: 4, price: 36 },
        { title: "Stardew Valley", price: 15 },
        { title: "Sid Meier's Civilization VI", rating: 4, price: 25 },
        { title: "Sonic Adventure 2", rating: 5, price: 15 },
        { title: "Star Wars Jedi: Fallen Order", price: 5 },
        { title: "Stick Fight", rating: 3, price: 10 },
        { title: "Ultimate Chicken Horse", rating: 3, price: 10 },
        { title: "Unrailed", rating: 3, price: 10 },
        { title: "Viscera Cleanup Detail", price: 0 },
        { title: "Warframe", rating: 2, price: 0 },
        { title: "Who's Your Daddy", price: 10 }
    ],
    "arcade-golden-tee": [
        { title: "Golden Tee", rating: 4, price: 0 },
        { title: "Golden Tee 3K", rating: 4, price: 0 },
        { title: "Golden Tee 2K", rating: 4, price: 0 },
        { title: "Golden Tee '99", rating: 4, price: 0 },
        { title: "Golden Tee '98", rating: 4, price: 0 }
    ],
    "arcade-big-buck-hunter": [
        { title: "Big Buck Hunter Pro", rating: 3, price: 0 },
        { title: "Big Buck Hunter Pro: Open Season", rating: 3, price: 0 },
        { title: "Big Buck Safari", rating: 3, price: 0 },
        { title: "Big Buck Safari: Outback", rating: 3, price: 0 }
    ]
};

// ===== Local player counts per game (couch/local only, online ignored) =====
// PLAYERS["<slug>"]["<title>"] = "1" | "1-2" | "1-4" | ...  (shown under the game title)
const PLAYERS = {
    "atari-2600": {
        "Asteroids": "1-2", "Bridge": "1", "Miniature Golf": "1-2", "Basic Programming": "1",
        "Codebreaker": "1-2", "Megamania": "1-2", "Space Combat": "1-2", "Tank Plus": "1-2",
        "Speedway II": "1-2", "Space Invaders": "1-2", "Super Breakout": "1-2", "Backgammon": "1-2",
        "Pac-Man": "1-2", "Spelling": "1-2", "Missile Command": "1-2", "Chopper Command": "1-2",
        "Donkey Kong": "1-2", "Warlords": "1-4", "E.T. the Extra-Terrestrial": "1", "Video Chess": "1-2",
        "Sky Diver": "1-2", "Star Raiders": "1", "Adventure": "1", "Stellar Track": "1",
        "Laser Blast": "1-2", "Brain Games": "1-2", "Memory Match": "1-2", "Space Jockey": "1-2",
        "Target Fun": "1-2", "Basketball": "1-2", "Pong Sports": "1-4"
    },
    "nes": {
        "Zelda II: The Adventure of Link": "1", "Game Genie": "1", "Tetris": "1", "Super Mario Bros. 3": "1-2",
        "The Legend of Zelda": "1", "Super Mario Bros.": "1-2", "Duck Hunt": "1-2",
        "The Simpsons: Bart vs. the Space Mutants": "1", "Track Meet": "1-6", "10-Yard Fight": "1-2"
    },
    "super-nintendo": {
        "Mega Man X": "1", "Super Game Boy": "1", "The Legend of Zelda: A Link to the Past": "1",
        "Super Mario World": "1-2", "Attack of the PETSCII Robots": "1", "Final Fight": "1"
    },
    "genesis": { "Contra: Hard Corps": "1-2", "Mortal Kombat": "1-2", "Sonic Spinball": "1-4" },
    "n64": {
        "The Legend of Zelda: Ocarina of Time": "1", "Super Mario 64": "1", "Paperboy": "1",
        "WWF WrestleMania 2000": "1-4", "Mortal Kombat Mythologies: Sub-Zero": "1", "Tarzan": "1",
        "Madden NFL 99": "1-4", "Mia Hamm Soccer 64": "1-4", "A Bug's Life": "1", "Bass Hunter 64": "1-2",
        "NFL Blitz 2000": "1-4", "Pokémon Stadium 2": "1-4", "Mario Party": "1-4",
        "Monster Truck Madness 64": "1-2", "Pokémon Stadium": "1-4", "GoldenEye 007": "1-4",
        "Star Wars Episode I: Racer": "1-2", "Superman 64": "1", "Mario Kart 64": "1-4",
        "Super Smash Bros.": "1-4", "Wave Race 64": "1-2", "Dark Rift": "1-2", "San Francisco Rush 2049": "1-4"
    },
    "atari-jaguar": { "Alien vs Predator": "1", "Iron Soldier": "1", "Wolfenstein 3D": "1" },
    "sega-saturn": { "Blazing Heroes": "1" },
    "playstation-1": { "Iron Man and X-O Manowar in Heavy Metal": "1-2" },
    "playstation-2": {
        "Tekken Tag Tournament": "1-2", "Orphen: Scion of Sorcery": "1", "Sly 2: Band of Thieves": "1",
        "Grand Theft Auto: Vice City": "1", "NASCAR 2005: Chase for the Cup": "1-2",
        "The Simpsons: Road Rage": "1-2", "2006 FIFA World Cup": "1-2", "NBA 08": "1-2",
        "Need for Speed: Underground 2": "1", "Need for Speed: ProStreet": "1-2", "FIFA Soccer 08": "1-2"
    },
    "gamecube": {
        "WarioWare, Inc.: Mega Party Game$!": "1-4", "Mario Kart: Double Dash!!": "1-4",
        "Mario Superstar Baseball": "1-4", "Sonic Mega Collection": "1-2", "Tak 2: The Staff of Dreams": "1",
        "The Ant Bully": "1", "Harry Potter and the Chamber of Secrets": "1", "Spider-Man 2": "1",
        "Madagascar": "1", "Donkey Kong Jungle Beat": "1", "007: NightFire": "1-4",
        "SpongeBob SquarePants: The Movie": "1", "Tony Hawk's Underground 2": "1-2", "Over the Hedge": "1",
        "Shrek 2": "1-4", "Super Smash Bros. Melee": "1-4", "Sonic Adventure 2: Battle": "1-2",
        "The Legend of Zelda: Twilight Princess": "1", "Paper Mario: The Thousand-Year Door": "1",
        "Mario Party 4": "1-4"
    },
    "xbox": { "Shrek SuperSlam": "1-4", "Madden NFL 06": "1-2", "Halo": "1-4", "Halo 2": "1-4" },
    "wii": {
        "Mario & Sonic at the Olympic Games": "1-4", "Guitar Hero III: Legends of Rock": "1-2",
        "Wii Play": "1-2", "Pirates of the Caribbean: At World's End": "1-2",
        "Cabela's Big Game Hunter 2010": "1-2", "Wii Sports": "1-4"
    },
    "xbox-360": {
        "Toy Story 3": "1-2", "Wipeout 2": "1-4", "WALL-E": "1-2", "The Elder Scrolls V: Skyrim": "1",
        "Rock Band 2": "1-4", "Red Dead Redemption": "1", "LEGO Indiana Jones": "1-2", "Kung Fu Panda": "1-2",
        "Borderlands 2": "1-2", "Battlefield 3": "1", "Grand Theft Auto V": "1", "Grand Theft Auto IV": "1",
        "Kinect Sports": "1-4", "Hole in the Wall": "1-4", "Payday 2": "1", "Monopoly": "1-4",
        "NCAA Football 11": "1-2", "NBA 2K11": "1-2", "Monopoly Streets": "1-4",
        "Halo: Combat Evolved Anniversary": "1-4", "Halo 3": "1-4", "Halo Wars": "1-2", "Halo 3: ODST": "1-4",
        "Halo 4": "1-4", "Fallout 3": "1", "Far Cry 3": "1", "Forza Horizon": "1",
        "Call of Duty: Black Ops": "1-2", "Call of Duty: Black Ops II": "1-2",
        "Call of Duty: Modern Warfare 2": "1-2", "Call of Duty: Modern Warfare 3": "1-2",
        "Command & Conquer 3: Tiberium Wars": "1", "Dead Island": "1", "Dead Island: Riptide": "1",
        "Kinect Adventures!": "1-2", "L.A. Noire": "1", "Left 4 Dead": "1-2", "Mafia II": "1",
        "Midnight Club: Los Angeles": "1"
    },
    "xbox-one": {
        "Titanfall": "1", "Tom Clancy's Rainbow Six Siege": "1", "Tom Clancy's The Division": "1",
        "Sea of Thieves": "1", "The Elder Scrolls Online: Tamriel Unlimited": "1", "State of Decay 2": "1",
        "Red Dead Redemption II": "1", "Battlefield Hardline": "1", "Forza Horizon 2": "1", "Just Cause 3": "1",
        "Battlefield V": "1", "Battlefield 1": "1", "Battlefield 4": "1",
        "Halo: The Master Chief Collection": "1-4", "Star Wars Battlefront": "1-2",
        "Call of Duty: Modern Warfare": "1-2", "Cyberpunk 2077": "1", "Destiny": "1", "Destiny 2": "1",
        "Dying Light": "1", "Fallout 4": "1", "Fallout 76": "1", "Far Cry 4": "1", "Forza Horizon 3": "1",
        "Forza Motorsport 5": "1", "Grand Theft Auto V": "1", "Halo 5: Guardians": "1", "Halo Wars 2": "1-2"
    },
    "nintendo-switch": { "Super Mario Odyssey": "1-2", "Mario Kart 8 Deluxe": "1-4", "Stardew Valley": "1-4" },
    "game-boy-color": {
        "Pokémon Blue": "1-2", "Tetris Blast": "1-2", "Tony Hawk's Pro Skater": "1",
        "Rugrats in Paris": "1", "Who Wants to Be a Millionaire": "1", "Pokémon Gold": "1-2"
    },
    "game-boy-advance": { "Pokémon FireRed": "1-2" },
    "nintendo-ds": {
        "The Legend of Zelda: Phantom Hourglass": "1", "Brain Age": "1", "Personal Trainer: Cooking": "1"
    },
    "omega-entertainment-machine": { "The King of Fighters 2000": "1-2", "Super N-in-1 SNK Multicart": "1-2" },
    "arcade-golden-tee": {
        "Golden Tee": "1-4", "Golden Tee 3K": "1-4", "Golden Tee 2K": "1-4", "Golden Tee '99": "1-4", "Golden Tee '98": "1-4"
    },
    "arcade-big-buck-hunter": {
        "Big Buck Hunter Pro": "1-2", "Big Buck Hunter Pro: Open Season": "1-2", "Big Buck Safari": "1-2", "Big Buck Safari: Outback": "1-2"
    },
    "steam-deck": {
        "7 Days to Die": "1", "Ace of Spades": "1", "Among Us": "1", "Ark: Survival Evolved": "1", "Arma 2": "1",
        "Baldur's Gate 3": "1-2", "Borderlands 2": "1", "Borderlands: The Pre-Sequel": "1", "Call of Duty": "1",
        "Car Mechanic Simulator 2014": "1", "Contagion": "1", "Content Warning": "1", "Cookie Clicker": "1",
        "Crawl": "1-4", "Dota 2": "1", "Fallout 76": "1", "The Forest": "1", "Game Dev Tycoon": "1",
        "Garfield Kart": "1", "Garry's Mod": "1", "Genital Jousting": "1-7", "Grand Theft Auto IV": "1",
        "Hacker Evolution": "1", "Halo: The Master Chief Collection": "1", "Hell Let Loose": "1",
        "Tabletop Simulator": "1", "Killing Floor": "1", "Hogwarts Legacy": "1",
        "The Jackbox Party Pack": "1-8", "The Jackbox Party Pack 2": "1-8", "The Jackbox Party Pack 3": "1-8",
        "The Jackbox Party Pack 4": "1-8", "The Jackbox Party Pack 5": "1-8", "The Jackbox Party Pack 6": "1-8",
        "The Jackbox Party Pack 7": "1-8", "The Jackbox Party Pack 8": "1-8", "The Jackbox Party Pack 9": "1-8",
        "The Jackbox Party Pack 10": "1-8", "Kerbal Space Program": "1", "Left 4 Dead": "1", "Left 4 Dead 2": "1",
        "Mini Motorways": "1", "Mount Your Friends": "1-8", "Move or Die": "1-4", "Payday 2": "1",
        "Phasmophobia": "1", "Pico Park": "1-8", "Portal": "1", "Portal 2": "1-2", "Red Dead Redemption 2": "1",
        "Remnant: From the Ashes": "1", "RimWorld": "1", "Robocraft": "1", "RollerCoaster Tycoon": "1",
        "Satisfactory": "1", "Stardew Valley": "1-4", "Sid Meier's Civilization VI": "1", "Sonic Adventure 2": "1-2",
        "Star Wars Jedi: Fallen Order": "1", "Stick Fight": "1-4", "Ultimate Chicken Horse": "1-4",
        "Unrailed": "1-4", "Viscera Cleanup Detail": "1", "Warframe": "1", "Who's Your Daddy": "1-2"
    }
};

// ===== Wishlist — systems not yet in the collection ("Hunting For") =====
const WISHLIST = [
    { name: "Intellivision", brand: "Mattel", year: 1979 },
    { name: "ColecoVision", brand: "Coleco", year: 1982 },
    { name: "Game Boy", brand: "Nintendo", year: 1989 },
    { name: "TurboGrafx-16", brand: "NEC", year: 1989 },
    { name: "Sega Game Gear", brand: "Sega", year: 1990 },
    { name: "Philips CD-i", brand: "Philips", year: 1991 },
    { name: "3DO", brand: "Panasonic", year: 1993 },
    { name: "Neo Geo Pocket", brand: "SNK", year: 1998 },
    { name: "Sega Dreamcast", brand: "Sega", year: 1999 },
    { name: "PlayStation 3", brand: "Sony", year: 2006 },
    { name: "PlayStation Vita", brand: "Sony", year: 2011 },
    { name: "Nintendo 3DS", brand: "Nintendo", year: 2011 },
    { name: "Wii U", brand: "Nintendo", year: 2012 },
    { name: "PlayStation 4", brand: "Sony", year: 2013 },
    { name: "PlayStation 5", brand: "Sony", year: 2020 },
    { name: "Xbox Series X", brand: "Microsoft", year: 2020 }
];

// Brand for each owned console (by slug) — used by the insights dashboard.
const BRAND = {
    "nes": "Nintendo", "super-nintendo": "Nintendo", "n64": "Nintendo",
    "gamecube": "Nintendo", "wii": "Nintendo", "nintendo-switch": "Nintendo",
    "game-boy-color": "Nintendo", "game-boy-advance": "Nintendo", "nintendo-ds": "Nintendo",
    "genesis": "Sega", "sega-saturn": "Sega", "sega-master-system": "Sega",
    "playstation-1": "Sony", "playstation-2": "Sony", "psp": "Sony",
    "xbox": "Microsoft", "xbox-360": "Microsoft", "xbox-one": "Microsoft",
    "atari-2600": "Atari", "atari-jaguar": "Atari",
    "omega-entertainment-machine": "SNK / Neo Geo",
    "steam-deck": "Valve",
    "arcade-golden-tee": "Arcade1Up", "arcade-big-buck-hunter": "Arcade1Up"
};

const BRAND_COLOR = {
    "Nintendo": "#E60012", "Sega": "#66c0f4", "Sony": "#003791",
    "Microsoft": "#107C10", "Atari": "#E67E22", "SNK / Neo Geo": "#FFD700",
    "Valve": "#1b2838", "Arcade1Up": "#9b59b6"
};

// ===== Owned accessories per console =====
// ACCESSORIES["<slug>"] = [ { name: "Extra Controller", price: 20, qty: 1, img: "images/..." }, ... ]
// price = what you paid (counts toward Total Invested). Optional: qty, img.
// Current value uses values.json -> accessories[slug][name] if present, otherwise the price paid.
const ACCESSORIES = {
    "atari-2600": [ { name: "Joystick", qty: 3 } ],
    "super-nintendo": [ { name: "Controller", qty: 2 } ],
    "n64": [ { name: "Controller", qty: 4 }, { name: "Rumble Pak", qty: 1 }, { name: "Transfer Pak", qty: 1 } ],
    "atari-jaguar": [ { name: "Controller", qty: 2 } ],
    "genesis": [ { name: "Controller", qty: 4 } ],
    "gamecube": [ { name: "Controller", qty: 4 }, { name: "DK Bongos", qty: 1 } ],
    "playstation-1": [ { name: "Controller", qty: 1 } ],
    "playstation-2": [ { name: "Controller", qty: 2 } ],
    "xbox": [ { name: "Controller", qty: 3 } ],
    "xbox-360": [ { name: "Controller", qty: 4 }, { name: "Kinect", qty: 1 } ],
    "xbox-one": [ { name: "Controller", qty: 5 }, { name: "Kinect", qty: 1 } ],
    "omega-entertainment-machine": [ { name: "Neo Geo MVS Controller", qty: 2 } ],
    "game-boy-color": [ { name: "Game Boy Printer", qty: 1 } ]
};

// ===== Per-console games wishlist (titles you're hunting for) =====
// GAME_WISHLIST["<slug>"] = [ "Game Title", "Another Game", ... ]
const GAME_WISHLIST = {};

// Allow Node tooling (scripts/*.js) to import this data. Harmless in the browser.
if (typeof module !== "undefined" && module.exports) {
    module.exports = { CONSOLES, RELEASE_YEAR, GAMES, WISHLIST, BRAND, BRAND_COLOR, ACCESSORIES, GAME_WISHLIST, PLAYERS, consoleSlug, findConsole };
}
