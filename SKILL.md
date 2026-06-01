# SKILL.md — RapidAPI Agent Skill Knowledge Base

> This is the master knowledge file. Read this first, then follow the daily workflow.

---

## 1. Mission

Your mission, executed every day:
1. Identify a profitable API niche
2. Build a working API (using free data sources or simple logic)
3. Deploy it to a free hosting provider
4. Publish it on RapidAPI with tiered pricing
5. Log it in `published/README.md`

**Time budget per API: 1–3 hours.**

---

## 2. Core Concepts

### What is RapidAPI?
RapidAPI is the world's largest API marketplace. Developers subscribe to APIs to use in their apps. You, as a provider, earn money when they subscribe to your plans.

### How You Earn
- You set **pricing plans** (Free → Pro → Ultra)
- Subscribers pay monthly
- RapidAPI pays you via **PayPal only** (monthly payout, 75% revenue share — RapidAPI keeps 25%)
- One API with 10 Pro subscribers ($9.99/mo) = ~$80/mo passive income

### What Makes a Good API?
- Solves a **specific, clear problem**
- Returns **clean JSON**
- Is **fast** (<500ms response)
- Has a **free tier** to attract subscribers
- Is **easy to understand** from the listing title alone

---

## 3. Quick Reference — Daily Checklist

```
[ ] Pick an idea → workflows/find-api-ideas.md
[ ] Build the API → workflows/build-and-deploy.md
[ ] Deploy to free host → workflows/build-and-deploy.md
[ ] Create listing on RapidAPI → workflows/publish-to-rapidapi.md
[ ] Set pricing plans → workflows/pricing-strategy.md
[ ] Test all endpoints in RapidAPI Playground
[ ] Log in published/README.md
```

---

## 4. Best API Categories on RapidAPI (by subscriber volume)

1. **Data & Analytics** — Finance, weather, sports stats, stock prices
2. **Text & NLP** — Sentiment analysis, translation, summarization, spell check
3. **Image & Video** — Resize, watermark, convert, OCR, face detection
4. **Social Media** — TikTok, Instagram, YouTube, Twitter data
5. **SEO & Marketing** — Keyword research, backlink checker, SERP data
6. **Finance** — Crypto prices, exchange rates, stock data
7. **Travel** — Flights, hotels, visa requirements
8. **Health & Food** — Nutrition data, recipes, calories
9. **Location & Maps** — Geocoding, IP location, timezone
10. **Productivity Tools** — QR codes, PDF tools, URL shortener, barcode

---

## 5. Free Data Sources You Can Wrap Into APIs

| Source | What you can expose | URL |
|--------|--------------------|----|
| Open Exchange Rates (free tier) | Currency conversion | openexchangerates.org |
| OpenWeatherMap (free tier) | Weather data | openweathermap.org |
| RestCountries | Country info (no key needed) | restcountries.com |
| JSONPlaceholder | Mock data (for testing APIs) | jsonplaceholder.typicode.com |
| QuoteGarden | Quotes | pprathameshmore.github.io/QuoteGarden |
| The Cat API | Cat images | thecatapi.com |
| SWAPI | Star Wars data (no key) | swapi.dev |
| PokeAPI | Pokémon data (no key) | pokeapi.co |
| NewsAPI (free tier) | News articles | newsapi.org |
| Alpha Vantage (free tier) | Stock & crypto data | alphavantage.co |
| NASA APIs | Space data | api.nasa.gov |
| DictionaryAPI | Word definitions (no key) | dictionaryapi.dev |
| IP-API | IP geolocation (no key, free) | ip-api.com |
| Exchangerate.host | Currency rates (no key) | exchangerate.host |
| Pexels / Unsplash | Stock photos | pexels.com/api |

**Strategy:** Take a free public API, add value (caching, reformatting, combining multiple sources, filtering, scoring) and re-publish on RapidAPI.

---

## 6. Value-Add Patterns

These transforms turn a free API into a paid product:

| Pattern | Example |
|---------|---------|
| **Combine** | Weather + Air Quality + UV Index in one call |
| **Enrich** | IP address → country + timezone + currency + flag |
| **Filter** | News → filter by sentiment score |
| **Rank/Score** | Keywords → difficulty score + search volume estimate |
| **Simplify** | Complex API → simple 1-param call |
| **Cache** | Expensive lookups cached for speed |
| **Batch** | Process multiple items in one request |
| **Format** | Return CSV, XML, or Markdown instead of raw JSON |

---

## 7. Tech Stack Recommendations

### Option A: Node.js + Express (fastest to ship)
- File: `templates/express-api/index.js`
- Deploy: Render.com (free tier, always-on)
- Time to deploy: ~15 minutes

### Option B: Python + FastAPI (best for AI/ML APIs)
- File: `templates/fastapi/main.py`
- Deploy: Render.com or Railway
- Time to deploy: ~20 minutes

### Hosting Decision Tree
```
Need always-on free hosting?  → Render.com (free tier, no sleep)
Need fast deploys from git?   → Railway ($5 free credit/mo)
Already have Heroku setup?    → Heroku
Need serverless / edge?       → Vercel (great for Node)
Need GPU / AI inference?      → Replicate or Modal
```

---

## 8. RapidAPI Proxy Secret (Security — Required)

Every endpoint MUST validate the RapidAPI proxy secret, or anyone can call your API without paying.

**Node.js:**
```js
app.use((req, res, next) => {
  if (req.headers['x-rapidapi-proxy-secret'] !== process.env.RAPIDAPI_PROXY_SECRET) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
});
```

**Python (FastAPI):**
```python
from fastapi import Header, HTTPException

async def verify_rapidapi(x_rapidapi_proxy_secret: str = Header(None)):
    if x_rapidapi_proxy_secret != os.getenv("RAPIDAPI_PROXY_SECRET"):
        raise HTTPException(status_code=403, detail="Access denied")
```

Find your proxy secret: RapidAPI Studio → [Your API] → Hub Listing → Gateway tab → Firewall Settings → Copy.

---

## 9. Naming & SEO Tips for Listings

- Use clear keywords in the title: `"Sentiment Analysis API"` not `"TextAI"`
- Include the main use case: `"Currency Converter & Exchange Rates API"`
- Write a 2-sentence description that answers: *What does it do? Who needs it?*
- Pick the most specific category (not just "Data")
- Add 5 tags: the technology + the problem + the audience

---

## 10. Files to Read Next

| Task | File |
|------|------|
| Run the daily workflow | `workflows/daily-workflow.md` |
| Find an API idea | `workflows/find-api-ideas.md` |
| Build & deploy | `workflows/build-and-deploy.md` |
| Publish on RapidAPI | `workflows/publish-to-rapidapi.md` |
| Set pricing | `workflows/pricing-strategy.md` |
| Set up credentials | `setup/credentials.md` |
