# Publishing an API on RapidAPI — Complete Guide

## Prerequisites
- API deployed at a public HTTPS URL
- RapidAPI Provider account (https://rapidapi.com/provider)
- Credentials in `setup/credentials.md`

---

## Step 1 — Create the Listing

1. Go to https://rapidapi.com/provider
2. Click **"Add New API"**
3. Fill in:
   - **API Name**: Clear, keyword-rich (e.g., `"Sentiment Analysis API"`)
   - **Short Description**: 1–2 sentences. Answer: *What does it do? Who needs it?*
   - **Category**: Pick the **most specific** one (not just "Data")
   - **Website**: Your GitHub repo URL
4. Click **"Add API"**

---

## Step 2 — Configure Base URL

1. Go to **Configuration** tab
2. Set **Base URL** → your deployed HTTPS URL (e.g., `https://my-api.onrender.com`)
3. Enable **Proxy Secret**:
   - Copy the generated secret
   - Paste it into your hosting dashboard as env var `RAPIDAPI_PROXY_SECRET`
   - Redeploy your service so it picks up the new env var
4. Test: click **"Test Endpoint"** — should return 200

---

## Step 3 — Define Endpoints

### Option A — Import OpenAPI Spec (fastest)
1. Edit `templates/openapi-spec.yaml` with your real endpoints
2. Go to **Endpoints** → **Import** → upload the YAML
3. Review each imported endpoint and add sample responses

### Option B — Manual Entry
For each endpoint:
1. Go to **Endpoints** → **Add Endpoint**
2. Set:
   - **Method**: GET / POST / etc.
   - **Name**: Human-readable (e.g., "Analyze Sentiment")
   - **Path**: e.g., `/analyze`
3. Add **Parameters**:
   - For each param: name, location (query/body/header), type, required?, description, example
4. Add **Responses**:
   - 200: paste a real example response body
   - 400: `{ "status": "error", "message": "Missing required parameter 'q'" }`
   - 429: `{ "status": "error", "message": "Rate limit exceeded" }`

---

## Step 4 — Set Pricing Plans

Follow `workflows/pricing-strategy.md` for the full strategy.

Quick setup:
1. Go to **Pricing** tab → **Add Plan**
2. Create at minimum: **Basic (Free)** + **Pro ($9.99)**

---

## Step 5 — Write Documentation

In the **Documentation** tab:

```markdown
## Overview
[What the API does — 2–3 sentences]

## Authentication
All requests require the X-RapidAPI-Key header, which is automatically added by RapidAPI.

## Endpoints

### GET /your-endpoint
[Description]

**Parameters:**
- `q` (required): Search query

**Example Response:**
[paste your JSON example]

## Error Codes
| Code | Meaning |
|------|---------|
| 400  | Bad request / missing params |
| 403  | Invalid API key |
| 429  | Rate limit exceeded |
| 500  | Server error |

## Code Examples
[Add JavaScript, Python, and cURL examples — RapidAPI auto-generates these]
```

---

## Step 6 — Add Code Snippets

RapidAPI auto-generates code snippets in 20+ languages. Verify the auto-generated ones are correct by:
1. Going to **Endpoints** → click an endpoint → **Code Snippets**
2. Copy the cURL example and run it → confirm it works

---

## Step 7 — Test in Playground

1. Go to **Endpoints** → click an endpoint → **Test Endpoint**
2. Fill in sample parameter values
3. Click **"Test"**
4. Confirm response is 200 with correct JSON

**Do this for every endpoint before publishing.**

---

## Step 8 — Publish

1. Go to **Settings** → **Visibility**
2. Set to **Public**
3. Click **Save**

Your API is now live at:
`https://rapidapi.com/[your-username]/api/[api-slug]`

---

## Step 9 — Log & Promote

1. Add to `published/README.md`
2. Share the listing URL on social media
3. Answer questions in the RapidAPI discussion tab promptly (boosts ranking)

---

## Ongoing Maintenance

| Frequency | Task |
|-----------|------|
| Daily | Check Analytics dashboard |
| Weekly | Respond to subscriber questions |
| Monthly | Add new endpoints based on subscriber feedback |
| Quarterly | Review pricing — raise prices if demand is high |
