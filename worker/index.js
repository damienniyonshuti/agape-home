const ALLOWED_ORIGIN = "https://damienniyonshuti.github.io";

const VERSES = [
  { text: "As for me and my house, we will serve the Lord.", reference: "Joshua 24:15", youversion: "https://www.bible.com/bible/111/JOS.24.15.NIV" },
  { text: "Be still, and know that I am God.", reference: "Psalm 46:10", youversion: "https://www.bible.com/bible/111/PSA.46.10.NIV" },
  { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1", youversion: "https://www.bible.com/bible/111/PSA.23.1.NIV" },
  { text: "This is the day which the Lord hath made; we will rejoice and be glad in it.", reference: "Psalm 118:24", youversion: "https://www.bible.com/bible/111/PSA.118.24.NIV" },
  { text: "The Lord is good unto them that wait for him, to the soul that seeketh him.", reference: "Lamentations 3:25", youversion: "https://www.bible.com/bible/111/LAM.3.25.NIV" },
  { text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.", reference: "Proverbs 3:5", youversion: "https://www.bible.com/bible/111/PRO.3.5.NIV" },
  { text: "In all thy ways acknowledge him, and he shall direct thy paths.", reference: "Proverbs 3:6", youversion: "https://www.bible.com/bible/111/PRO.3.6.NIV" },
  { text: "I can do all things through Christ which strengtheneth me.", reference: "Philippians 4:13", youversion: "https://www.bible.com/bible/111/PHP.4.13.NIV" },
  { text: "Rejoice evermore. Pray without ceasing.", reference: "1 Thessalonians 5:16–17", youversion: "https://www.bible.com/bible/111/1TH.5.16-17.NIV" },
  { text: "Let all your things be done with charity.", reference: "1 Corinthians 16:14", youversion: "https://www.bible.com/bible/111/1CO.16.14.NIV" },
  { text: "Perfect love casteth out fear.", reference: "1 John 4:18", youversion: "https://www.bible.com/bible/111/1JN.4.18.NIV" },
  { text: "We love him, because he first loved us.", reference: "1 John 4:19", youversion: "https://www.bible.com/bible/111/1JN.4.19.NIV" },
  { text: "For where two or three are gathered together in my name, there am I in the midst of them.", reference: "Matthew 18:20", youversion: "https://www.bible.com/bible/111/MAT.18.20.NIV" },
  { text: "Blessed are the peacemakers: for they shall be called the children of God.", reference: "Matthew 5:9", youversion: "https://www.bible.com/bible/111/MAT.5.9.NIV" },
  { text: "Ask, and it shall be given you; seek, and ye shall find.", reference: "Matthew 7:7", youversion: "https://www.bible.com/bible/111/MAT.7.7.NIV" },
  { text: "With God all things are possible.", reference: "Matthew 19:26", youversion: "https://www.bible.com/bible/111/MAT.19.26.NIV" },
  { text: "Peace I leave with you, my peace I give unto you.", reference: "John 14:27", youversion: "https://www.bible.com/bible/111/JHN.14.27.NIV" },
  { text: "Let not your heart be troubled: ye believe in God, believe also in me.", reference: "John 14:1", youversion: "https://www.bible.com/bible/111/JHN.14.1.NIV" },
  { text: "If God be for us, who can be against us?", reference: "Romans 8:31", youversion: "https://www.bible.com/bible/111/ROM.8.31.NIV" },
  { text: "Be kindly affectioned one to another with brotherly love; in honour preferring one another.", reference: "Romans 12:10", youversion: "https://www.bible.com/bible/111/ROM.12.10.NIV" },
  { text: "Let us not be weary in well doing: for in due season we shall reap, if we faint not.", reference: "Galatians 6:9", youversion: "https://www.bible.com/bible/111/GAL.6.9.NIV" },
  { text: "Bear ye one another's burdens, and so fulfil the law of Christ.", reference: "Galatians 6:2", youversion: "https://www.bible.com/bible/111/GAL.6.2.NIV" },
  { text: "And be ye kind one to another, tenderhearted, forgiving one another.", reference: "Ephesians 4:32", youversion: "https://www.bible.com/bible/111/EPH.4.32.NIV" },
  { text: "Casting all your care upon him; for he careth for you.", reference: "1 Peter 5:7", youversion: "https://www.bible.com/bible/111/1PE.5.7.NIV" },
  { text: "Every good gift and every perfect gift is from above.", reference: "James 1:17", youversion: "https://www.bible.com/bible/111/JAS.1.17.NIV" },
  { text: "Draw nigh to God, and he will draw nigh to you.", reference: "James 4:8", youversion: "https://www.bible.com/bible/111/JAS.4.8.NIV" },
  { text: "The name of the Lord is a strong tower: the righteous runneth into it, and is safe.", reference: "Proverbs 18:10", youversion: "https://www.bible.com/bible/111/PRO.18.10.NIV" },
  { text: "A friend loveth at all times.", reference: "Proverbs 17:17", youversion: "https://www.bible.com/bible/111/PRO.17.17.NIV" },
  { text: "The Lord bless thee, and keep thee.", reference: "Numbers 6:24", youversion: "https://www.bible.com/bible/111/NUM.6.24.NIV" },
  { text: "The joy of the Lord is your strength.", reference: "Nehemiah 8:10", youversion: "https://www.bible.com/bible/111/NEH.8.10.NIV" }
];

// The Agape wisdom calendar intentionally mixes original reflections with a
// small set of source-checked quotations. The originals keep the tone warm,
// faith-centered and timeless; the attributed quotations add recognizable
// voices without turning the page into a generic quote feed.
const WISDOM_THEMES = [
  {
    name: "Faith",
    starts: [
      "Trust God before the whole path makes sense.",
      "Choose obedience over perfect clarity.",
      "Pray first, then move with courage.",
      "Let faith set the pace, not fear.",
      "Stay rooted when outcomes feel uncertain.",
      "Hold the vision with open hands."
    ],
    ends: [
      "The next faithful step is enough for today.",
      "Some growth becomes visible only after trust has done its work.",
      "Peace and action can live in the same heart.",
      "You do not need every answer to move wisely.",
      "Deep roots matter most when the wind rises.",
      "Trust becomes strongest when control loosens its grip."
    ]
  },
  {
    name: "Discipline",
    starts: [
      "Do the small thing well.",
      "Keep the promise you made to yourself.",
      "Choose consistency over intensity.",
      "Start before you feel fully ready.",
      "Protect the habits that protect your future.",
      "Practice when no one is watching."
    ],
    ends: [
      "Big outcomes are usually built from ordinary repetitions.",
      "Self-trust grows one kept commitment at a time.",
      "What you repeat quietly can outlast what you do dramatically.",
      "Momentum often arrives after movement.",
      "Your routines are shaping who you become.",
      "Private standards eventually shape public results."
    ]
  },
  {
    name: "Purpose",
    starts: [
      "Know what matters before the noise gets loud.",
      "Build toward something larger than applause.",
      "Let your gifts become useful to others.",
      "Do not confuse motion with meaning.",
      "Let your ambition answer to your values.",
      "Make room for the work only you can do."
    ],
    ends: [
      "A clear why makes many decisions simpler.",
      "Purpose survives seasons when recognition disappears.",
      "Impact begins where ability meets service.",
      "The right direction matters more than impressive speed.",
      "Achievement is strongest when character can carry it.",
      "Calling often becomes clearer through faithful action."
    ]
  },
  {
    name: "Excellence",
    starts: [
      "Do the invisible part with care.",
      "Raise the standard without raising the noise.",
      "Make the next version better, not merely bigger.",
      "Care about the details that serve the whole.",
      "Respect the work enough to revise it.",
      "Let quality become a habit, not an event."
    ],
    ends: [
      "Excellence is often decided before anyone sees the result.",
      "Quiet quality speaks for itself.",
      "Refinement is a form of discipline.",
      "Craftsmanship is care made visible in the work.",
      "Strong outcomes often come from one more thoughtful pass.",
      "Standards are strongest when they become normal."
    ]
  },
  {
    name: "Courage",
    starts: [
      "Move toward what matters even with a trembling voice.",
      "Say the true thing with grace.",
      "Take the risk that aligns with your values.",
      "Do not let fear make every decision.",
      "Choose the difficult right over the easy wrong.",
      "Be willing to begin again with more wisdom."
    ],
    ends: [
      "Courage is action that refuses to wait for perfect comfort.",
      "Bravery and kindness are not opposites.",
      "A safe choice is not always a faithful one.",
      "Fear can inform you without leading you.",
      "Character is often revealed in inconvenient moments.",
      "Starting again can be a sign of strength, not defeat."
    ]
  },
  {
    name: "Service",
    starts: [
      "Use what you know to make someone else's path easier.",
      "Leave people lighter than you found them.",
      "Notice who is carrying more than they say.",
      "Make excellence useful to somebody.",
      "Share credit quickly and take responsibility fully.",
      "Use influence to open doors, not just enter them."
    ],
    ends: [
      "Generosity multiplies the value of your gifts.",
      "Service can be powerful without being loud.",
      "Attention is one of the simplest forms of love.",
      "Skill becomes impact when it serves a real need.",
      "Healthy teams remember who made room for others.",
      "Leadership expands when opportunity is shared."
    ]
  },
  {
    name: "Love",
    starts: [
      "Love people in ways they can actually feel.",
      "Be present enough to notice the small things.",
      "Choose patience when you could choose irritation.",
      "Speak life without avoiding truth.",
      "Protect the peace of the people you love.",
      "Love consistently, not only conveniently."
    ],
    ends: [
      "Good intentions become meaningful through thoughtful action.",
      "Attention is one of love's clearest languages.",
      "Love often looks ordinary before it looks heroic.",
      "Care and honesty belong in the same sentence.",
      "Strength can be gentle and still be strong.",
      "Steady care builds the kind of trust words cannot rush."
    ]
  },
  {
    name: "Leadership",
    starts: [
      "Bring clarity when the room feels noisy.",
      "Set the tone you hope others will carry.",
      "Listen long enough to understand the real problem.",
      "Make people stronger, not more dependent on you.",
      "Create room for better ideas than your own.",
      "Lead with conviction and revise with humility."
    ],
    ends: [
      "Good leadership reduces confusion before it increases speed.",
      "Culture learns from what leaders repeatedly model.",
      "Assumptions become expensive when curiosity disappears.",
      "Leadership scales when capability spreads.",
      "Strong leaders are not threatened by strong contributors.",
      "Being decisive does not require pretending to be infallible."
    ]
  },
  {
    name: "Resilience",
    starts: [
      "Keep going without pretending it is easy.",
      "Let the setback become information.",
      "Rest when needed, then return with intention.",
      "Do not make a permanent conclusion from a temporary season.",
      "Carry the lesson, not the shame.",
      "Build again with what the storm taught you."
    ],
    ends: [
      "Honest endurance is stronger than performative toughness.",
      "A hard result can still improve the next decision.",
      "Recovery is part of resilience, not a failure of it.",
      "Time can change what today makes look final.",
      "Growth begins when pain stops owning the story.",
      "Wisdom can turn loss into better foundations."
    ]
  },
  {
    name: "Humility",
    starts: [
      "Stay teachable even when you are skilled.",
      "Be curious before being certain.",
      "Admit the mistake quickly.",
      "Thank the people who helped shape the win.",
      "Hold strong opinions with open ears.",
      "Remember how much you still do not know."
    ],
    ends: [
      "Competence grows faster when ego stops blocking feedback.",
      "A good question can protect you from an expensive assumption.",
      "Trust often grows when defensiveness leaves the room.",
      "No meaningful success is completely solo.",
      "Conviction and humility can coexist.",
      "Wonder keeps intelligence from becoming arrogance."
    ]
  },
  {
    name: "Stewardship",
    starts: [
      "Treat time like something entrusted to you.",
      "Use resources with gratitude and intention.",
      "Spend attention where it can grow something good.",
      "Build margin before you need it.",
      "Protect your energy from avoidable leaks.",
      "Plan for the future without forgetting to live today."
    ],
    ends: [
      "A calendar quietly reveals what your priorities really are.",
      "Stewardship turns ownership into responsibility.",
      "Not everything deserves access to your focus.",
      "Wise preparation makes pressure less expensive.",
      "Saying no can preserve a better yes.",
      "Wisdom holds preparation and gratitude together."
    ]
  },
  {
    name: "Peace",
    starts: [
      "Do not rush what needs presence.",
      "Create quiet before you create more input.",
      "Let rest restore you instead of making you guilty.",
      "Protect a little unhurried time.",
      "Breathe before you react.",
      "Enjoy what is already good."
    ],
    ends: [
      "Some of life's best moments disappear when everything becomes a task.",
      "Peace often needs space before it needs answers.",
      "A rested mind can see what exhaustion hides.",
      "Not every valuable moment produces something measurable.",
      "A small pause can protect a much bigger decision.",
      "Gratitude protects the present from endless postponement."
    ]
  }
];

const FEATURED_QUOTES = [
  { day: 1, quote: "Make each day your masterpiece.", author: "John Wooden", theme: "Excellence", source: "UCLA" },
  { day: 32, quote: "Optimism is the faith that leads to achievement.", author: "Helen Keller", theme: "Faith", source: "Optimism (1903), American Foundation for the Blind" },
  { day: 61, quote: "If there is no struggle, there is no progress.", author: "Frederick Douglass", theme: "Resilience", source: "West India Emancipation speech, 1857" },
  { day: 92, quote: "Far and away the best prize that life offers is the chance to work hard at work worth doing.", author: "Theodore Roosevelt", theme: "Purpose", source: "The Key to Success in Life, 1916" },
  { day: 122, quote: "The time is always right to do right.", author: "Martin Luther King Jr.", theme: "Courage", source: "NAACP Freedom Fund Dinner address, 1962" },
  { day: 153, quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", theme: "Purpose", source: "Stanford Commencement, 2005" },
  { day: 183, quote: "Well done is better than well said.", author: "Benjamin Franklin", theme: "Excellence", source: "Poor Richard's Almanack" },
  { day: 214, quote: "Power concedes nothing without a demand.", author: "Frederick Douglass", theme: "Courage", source: "West India Emancipation speech, 1857" },
  { day: 245, quote: "The human being is born with an incurable capacity for making the best of things.", author: "Helen Keller", theme: "Resilience", source: "Red Cross Magazine, 1919" },
  { day: 275, quote: "Work hard, and when you do play, play hard.", author: "Theodore Roosevelt", theme: "Discipline", source: "Philadelphia speech, 1902" },
  { day: 306, quote: "Human progress never rolls in on the wheels of inevitability.", author: "Martin Luther King Jr.", theme: "Discipline", source: "NAACP Freedom Fund Dinner address, 1962" },
  { day: 336, quote: "Lost time is never found again.", author: "Benjamin Franklin", theme: "Stewardship", source: "Poor Richard's Almanack" }
];

function buildWisdomLibrary() {
  const library = [];
  for (let round = 0; library.length < 366; round++) {
    for (let t = 0; t < WISDOM_THEMES.length && library.length < 366; t++) {
      const theme = WISDOM_THEMES[t];
      const start = theme.starts[(round + t) % theme.starts.length];
      const end = theme.ends[(round * 5 + t * 3) % theme.ends.length];
      library.push({ quote: `${start} ${end}`, author: "Agape Reflection", theme: theme.name, source: "Original Agape reflection" });
    }
  }

  for (const item of FEATURED_QUOTES) {
    library[item.day - 1] = { quote: item.quote, author: item.author, theme: item.theme, source: item.source };
  }

  return library;
}

const WISDOM = buildWisdomLibrary();

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Agape-Token",
    "Cache-Control": "no-store"
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), { status, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } });
}

function pacificDate() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  return Object.fromEntries(parts.map(p => [p.type, p.value]));
}

function dayOfYear() {
  const v = pacificDate();
  const y = Number(v.year), m = Number(v.month), d = Number(v.day);
  return Math.floor((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 0)) / 86400000);
}

function todaysVerse() { return VERSES[(dayOfYear() - 1) % VERSES.length]; }
function todaysWisdom() { return WISDOM[(dayOfYear() - 1) % WISDOM.length]; }

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (request.method !== "GET") return new Response("Method not allowed", { status: 405, headers: corsHeaders(origin) });
    const url = new URL(request.url);
    if (url.pathname === "/verse") return json(todaysVerse(), 200, origin);
    if (url.pathname === "/wisdom") return json(todaysWisdom(), 200, origin);
    if (url.pathname === "/wisdom-count") return json({ count: WISDOM.length }, 200, origin);
    if (url.pathname !== "/wifi") return new Response("Not found", { status: 404, headers: corsHeaders(origin) });
    const token = request.headers.get("X-Agape-Token");
    if (!token || token !== env.AGAPE_TOKEN) return json({ error: "Unauthorized" }, 401, origin);
    return json({ ssid: env.WIFI_NAME, password: env.WIFI_PASSWORD }, 200, origin);
  }
};
