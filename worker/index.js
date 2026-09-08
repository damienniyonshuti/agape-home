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

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Agape-Token",
    "Cache-Control": "no-store"
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" }
  });
}

function todaysVerse() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(p => [p.type, p.value]));
  const dayNumber = Math.floor(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)) / 86400000);
  return VERSES[dayNumber % VERSES.length];
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== "GET") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);

    if (url.pathname === "/verse") {
      return json(todaysVerse(), 200, origin);
    }

    if (url.pathname !== "/wifi") {
      return new Response("Not found", { status: 404, headers: corsHeaders(origin) });
    }

    const token = request.headers.get("X-Agape-Token");
    if (!token || token !== env.AGAPE_TOKEN) {
      return json({ error: "Unauthorized" }, 401, origin);
    }

    return json({ ssid: env.WIFI_NAME, password: env.WIFI_PASSWORD }, 200, origin);
  }
};
