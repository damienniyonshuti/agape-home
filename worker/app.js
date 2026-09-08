import legacy from "./index.js";

// AGAPE 366-day KJV Scripture calendar.
// Exact verse text comes from the audited 1769 KJV corpus maintained at
// renniemaharaj/kjv-bible and is cached at the Cloudflare edge.
const FEATURED = [
  ["Joshua",24,15,"JOS"],["Psalms",46,10,"PSA"],["Psalms",23,1,"PSA"],["Psalms",118,24,"PSA"],
  ["Lamentations",3,25,"LAM"],["Proverbs",3,5,"PRO"],["Proverbs",3,6,"PRO"],["Philippians",4,13,"PHP"],
  ["1 Thessalonians",5,16,"1TH"],["1 Thessalonians",5,17,"1TH"],["1 Corinthians",16,14,"1CO"],
  ["1 John",4,18,"1JN"],["1 John",4,19,"1JN"],["Matthew",18,20,"MAT"],["Matthew",5,9,"MAT"],
  ["Matthew",7,7,"MAT"],["Matthew",19,26,"MAT"],["John",14,27,"JHN"],["John",14,1,"JHN"],
  ["Romans",8,31,"ROM"],["Romans",12,10,"ROM"],["Galatians",6,9,"GAL"],["Galatians",6,2,"GAL"],
  ["Ephesians",4,32,"EPH"],["1 Peter",5,7,"1PE"],["James",1,17,"JAS"],["James",4,8,"JAS"],
  ["Proverbs",18,10,"PRO"],["Proverbs",17,17,"PRO"],["Numbers",6,24,"NUM"]
];
const FILES={"Joshua":"Joshua.json","Psalms":"Psalms.json","Lamentations":"Lamentations.json","Proverbs":"Proverbs.json","Philippians":"Philippians.json","1 Thessalonians":"1 Thessalonians.json","1 Corinthians":"1 Corinthians.json","1 John":"1 John.json","Matthew":"Matthew.json","John":"John.json","Romans":"Romans.json","Galatians":"Galatians.json","Ephesians":"Ephesians.json","1 Peter":"1 Peter.json","James":"James.json","Numbers":"Numbers.json"};
const PROVERBS_COUNTS={10:32,11:31,12:28,13:25,14:35,15:33,16:33,17:28,18:24,19:29,20:30,21:31,22:29,23:35,24:34,25:28,26:28,27:27,28:28,29:27,30:33,31:31};
function buildCalendar(){const out=[...FEATURED],seen=new Set(FEATURED.map(x=>`${x[0]}:${x[1]}:${x[2]}`));for(let chapter=10;chapter<=31&&out.length<366;chapter++){for(let verse=1;verse<=PROVERBS_COUNTS[chapter]&&out.length<366;verse++){const key=`Proverbs:${chapter}:${verse}`;if(!seen.has(key)){out.push(["Proverbs",chapter,verse,"PRO"]);seen.add(key)}}}return out}
const SCRIPTURE_CALENDAR=buildCalendar();
function pacificDayOfYear(){const parts=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return Math.floor((Date.UTC(+p.year,+p.month-1,+p.day)-Date.UTC(+p.year,0,0))/86400000)}
async function kjvText(book,chapter,verse){const filename=FILES[book],source=`https://raw.githubusercontent.com/renniemaharaj/kjv-bible/main/${encodeURIComponent(filename)}`,cacheKey=new Request(source,{method:"GET"}),cache=caches.default;let response=await cache.match(cacheKey);if(!response){response=await fetch(source,{headers:{"User-Agent":"agape-guest-api"}});if(!response.ok)throw new Error("KJV source unavailable");const headers=new Headers(response.headers);headers.set("Cache-Control","public, max-age=604800");response=new Response(response.body,{status:response.status,headers});await cache.put(cacheKey,response.clone())}const data=await response.json(),text=data[String(chapter)]?.[String(verse)];if(!text)throw new Error(`Missing KJV verse ${book} ${chapter}:${verse}`);return text}
async function todaysKJV(){const day=pacificDayOfYear(),[book,chapter,verse,code]=SCRIPTURE_CALENDAR[(day-1)%366],text=await kjvText(book,chapter,verse),displayBook=book==="Psalms"?"Psalm":book;return{text,reference:`${displayBook} ${chapter}:${verse}`,translation:"KJV",youversion:`https://www.bible.com/bible/1/${code}.${chapter}.${verse}.KJV`}}
export default{async fetch(request,env,ctx){const url=new URL(request.url);if(url.pathname!=="/verse")return legacy.fetch(request,env,ctx);const origin=request.headers.get("Origin")||"",headers={"Access-Control-Allow-Origin":origin==="https://damienniyonshuti.github.io"?origin:"https://damienniyonshuti.github.io","Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"};if(request.method==="OPTIONS")return new Response(null,{status:204,headers});if(request.method!=="GET")return new Response("Method not allowed",{status:405,headers});try{return new Response(JSON.stringify(await todaysKJV()),{status:200,headers})}catch(error){return legacy.fetch(request,env,ctx)}}};
