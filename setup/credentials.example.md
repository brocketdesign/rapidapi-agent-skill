# Setup — Credentials & Environment Variables

> ⚠️ Fill this in locally. NEVER commit real keys to git.
> Add `setup/credentials.md` to `.gitignore` if you store real values here.

---

## RapidAPI — Consumer API Key (X-RapidAPI-Key)

This is the key that goes into every API call header.

| Field | Value |
|-------|-------|
| Account Email | `YOUR_EMAIL` |
| X-RapidAPI-Key | `YOUR_RAPIDAPI_KEY` |

**How to find it (exact steps):**
1. Go to https://rapidapi.com/developer/apps
2. Click on your app (a default app is created when you sign up)
3. Click the **Authorization** tab
4. Your key is listed there — click to copy

> You are NOT looking in the Console → Security page (that is for SSL certificates).
> Go to **Developer Dashboard → Apps → Authorization**, not the Console.

---

## RapidAPI — Provider Proxy Secret (per API)

This is different from the key above. Each API you publish gets its own proxy secret.
Use it in your backend to verify requests really come from RapidAPI.

| Field | Value |
|-------|-------|
| Proxy Secret | *(found per API — see below)* |

**How to find it (exact steps):**
1. Go to https://rapidapi.com/studio (or click **My APIs** in top nav)
2. Open the API you published
3. Click **Hub Listing** → **Gateway** tab
4. Under **Firewall Settings**, click **Copy** next to `X-RapidAPI-Proxy-Secret`
5. Paste it into your hosting provider's env vars as `RAPIDAPI_PROXY_SECRET`

---

## Hosting — Render.com (Recommended)

| Field | Value |
|-------|-------|
| Account Email | `YOUR_EMAIL` |
| Dashboard | https://dashboard.render.com |
| Deploy method | Connect GitHub repo → auto-deploy on push |

---

## Hosting — Railway (Alternative)

| Field | Value |
|-------|-------|
| Account Email | `YOUR_EMAIL` |
| Dashboard | https://railway.app |
| Free credit | $5/month |

---

## Hosting — Heroku (If already set up)

| Field | Value |
|-------|-------|
| Account Email | `YOUR_EMAIL` |
| API Key | `YOUR_HEROKU_API_KEY` |
| Known apps | chatlamix, nippov100, rakuado |
| Deploy | `git push heroku main` |

---

## External Data Sources (fill in as needed)

| Service | API Key | Free Tier |
|---------|---------|-----------|
| OpenWeatherMap | `YOUR_KEY` | 1,000 calls/day |
| Alpha Vantage | `YOUR_KEY` | 25 calls/day |
| NewsAPI | `YOUR_KEY` | 100 calls/day |
| OpenAI | `YOUR_KEY` | Pay per use |
| Pexels | `YOUR_KEY` | 200 calls/hour |

---

## Per-API Environment Variables Template

Copy this block when setting up each deployed API:

```env
PORT=3000
NODE_ENV=production
RAPIDAPI_PROXY_SECRET=          # From RapidAPI → API Settings → Security
EXTERNAL_API_KEY=               # Whatever upstream API your service wraps
```

---

## Stripe (Payouts)

RapidAPI pays via Stripe. Connect your Stripe account:
1. RapidAPI Provider Dashboard → Billing
2. Connect Stripe → verify bank account
3. Payouts arrive monthly (net 30)

| Field | Value |
|-------|-------|
| Stripe Account Email | `YOUR_EMAIL` |
| Minimum payout threshold | $10 |
| Payout schedule | Monthly |
