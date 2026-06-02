# Publishing an API on RapidAPI — Complete Guide

## Prerequisites
- API deployed at a public HTTPS URL
- RapidAPI Provider account (https://rapidapi.com/provider)
- Credentials in `setup/credentials.md`

---

## Step 0 — Generate the Listing Document (Required)

**Before touching the RapidAPI dashboard**, produce the listing document.
Copy `templates/rapidapi-listing.json` into **the API's own repo** as `rapidapi-listing.json` and fill in every field:

```bash
cp /path/to/rapidapi-agent-skill/templates/rapidapi-listing.json /path/to/my-api/rapidapi-listing.json
```

> The listing document lives in the API repo (not in this skill repo) so it travels with the code.
> Add `rapidapi-listing.json` to the API repo's git history and commit it.

The document must contain:

| Field | What to fill in |
|-------|----------------|
| `name` | Clear, keyword-rich API name (e.g. `"Readability Score API"`) |
| `short_description` | 1 sentence: what it does + who needs it |
| `long_description` | 2–4 sentences for the Hub listing |
| `category` | Most specific RapidAPI category (see template for options) |
| `account.type` | `"personal"` or `"team"` |
| `account.username` | RapidAPI username (e.g. `"brocketdesign"`) |
| `account.team_name` | Team name if `type` is `"team"`, otherwise `null` |
| `tags` | 5 tags: technology + problem + audience |
| `base_url` | Live HTTPS URL of the deployed API |
| `backend_repo` | GitHub repo URL |
| `hosting_provider` | Railway / Render / Heroku / Vercel |
| `pricing` | All 4 tiers (see `workflows/pricing-strategy.md`) |
| `openapi` | Full OpenAPI 3.0 spec **in JSON** (not YAML) — one endpoint per path |

> **Why JSON not YAML?** RapidAPI's import UI accepts both, but the listing document is a
> single portable file that humans and agents can read, validate, and paste directly into
> the RapidAPI dashboard without a conversion step.

**Output:** `published/<api-name>.json` committed to this repo. Hand this file to the user.

---

## Step 1 — Create the Listing

Use the values from your `published/<api-name>.json` listing document:

1. Go to https://rapidapi.com/provider
2. Click **"Add New API"**
3. Fill in (copy from listing doc):
   - **API Name** → `name`
   - **Short Description** → `short_description`
   - **Category** → `category`
   - **Account** → personal or the team name from `account`
   - **Website** → `backend_repo`
4. Click **"Add API"**

---

## Step 2 — Configure Base URL

1. Go to **Configuration** tab
2. Set **Base URL** → your deployed HTTPS URL (e.g., `https://my-api.onrender.com`)
3. Enable **Proxy Secret**:
   - Go to **Hub Listing → Gateway tab → Firewall Settings**
   - Click **Copy** next to `X-RapidAPI-Proxy-Secret`
   - Paste it into your hosting dashboard as env var `RAPIDAPI_PROXY_SECRET`
   - Redeploy your service so it picks up the new env var
4. Test: click **"Test Endpoint"** — should return 200

---

## Step 3 — Define Endpoints

### Option A — Import from listing document (fastest)
1. Open your `published/<api-name>.json` listing document
2. Extract the `openapi` field — this is a complete OpenAPI 3.0 JSON spec
3. Save it as a standalone `.json` file (or paste directly)
4. Go to **Endpoints** → **Import** → upload the JSON file
5. Review each imported endpoint and confirm sample responses match

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

Use the `pricing` array from your `published/<api-name>.json` listing document.

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
