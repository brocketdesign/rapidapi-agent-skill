# How to Publish a New API on RapidAPI

## Prerequisites
- RapidAPI Provider account (https://rapidapi.com/provider)
- Your API deployed and accessible at a public HTTPS URL
- Credentials filled in `RAPIDAPI_KEYS.md`

---

## Step 1 — Prepare Your API

1. Deploy your API to a public HTTPS endpoint (e.g., Heroku, Vercel, AWS).
2. Ensure it returns JSON and follows REST conventions.
3. Add the `RAPIDAPI_PROXY_SECRET` check to all endpoints:

```js
// Express middleware example
app.use((req, res, next) => {
  const secret = req.headers['x-rapidapi-proxy-secret'];
  if (secret !== process.env.RAPIDAPI_PROXY_SECRET) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});
```

---

## Step 2 — Create the API Listing on RapidAPI

1. Go to https://rapidapi.com/provider → **"Add new API"**
2. Fill in:
   - **API Name** — clear, keyword-rich name
   - **Short Description** — 1–2 sentences, what problem it solves
   - **Category** — choose the most specific category
   - **Website URL** — your landing page or GitHub repo
   - **Tags** — 3–5 relevant keywords

---

## Step 3 — Configure the Base URL

1. In **API Settings → Configuration**:
   - Set **Base URL** → your production HTTPS endpoint
   - Enable **"Proxy Secret"** and copy the value into your backend env as `RAPIDAPI_PROXY_SECRET`

---

## Step 4 — Define Endpoints (OpenAPI / Manual)

Option A — **Import OpenAPI spec** (recommended):
1. Write `spec.yaml` using the template in `apis/_example/spec.yaml`
2. In RapidAPI → **Endpoints → Import** → upload the YAML

Option B — **Manual entry**:
1. Go to **Endpoints → Add endpoint**
2. For each endpoint specify:
   - Method (GET / POST / …)
   - Path (e.g., `/search`)
   - Parameters (query, header, body)
   - Sample response (200, 400, 429, 500)

---

## Step 5 — Set Up Pricing Plans

1. Go to **Pricing Plans → Add Plan**
2. Recommended plan structure:

| Plan | Price | Requests/month | Rate limit |
|------|-------|----------------|------------|
| Basic (Free) | $0 | 100 | 10 req/min |
| Pro | $9.99/mo | 10,000 | 60 req/min |
| Ultra | $29.99/mo | 100,000 | 300 req/min |
| Mega | $99.99/mo | Unlimited | Unlimited |

3. Set **hard limits** to prevent abuse on free tier.

---

## Step 6 — Write the API Documentation

1. In **Documentation** tab, write a clear description with:
   - What the API does
   - Authentication (handled via RapidAPI headers automatically)
   - Code samples (JavaScript, Python, cURL)
   - Error codes table

2. Add a **Tutorial** post if the API needs more context.

---

## Step 7 — Test with the Playground

1. In **Endpoints tab**, use the built-in Playground to test every endpoint.
2. Confirm responses are correct and response times are reasonable (<500ms).

---

## Step 8 — Submit for Review & Publish

1. Go to **Settings → Visibility** → set to **Public**
2. Click **"Submit for Review"** (optional — some APIs go live immediately)
3. Share the RapidAPI URL in `README.md` → Published APIs table.

---

## Step 9 — Monitor & Iterate

- **Analytics**: RapidAPI Provider Dashboard → Analytics tab
- **Webhooks**: Handle subscription events at your webhook endpoints (see `RAPIDAPI_KEYS.md`)
- **Logs**: Check your hosting provider's logs for errors

---

## Checklist

- [ ] API deployed at public HTTPS URL
- [ ] Proxy secret validation added to backend
- [ ] Listing created on RapidAPI
- [ ] Base URL configured
- [ ] All endpoints defined with sample responses
- [ ] Pricing plans configured
- [ ] Documentation written with code samples
- [ ] Playground tested — all endpoints return correct responses
- [ ] Published and URL added to `README.md`
