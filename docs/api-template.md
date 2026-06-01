# API Name — Template

> Copy this file to `apis/your-api-name/README.md` and fill in the sections.

## Overview

| Field | Value |
|-------|-------|
| **API Name** | My API Name |
| **Category** | e.g., Data / Tools / Finance / AI |
| **RapidAPI URL** | https://rapidapi.com/brocketdesign/api/my-api-name |
| **Base URL** | https://my-api.example.com |
| **Status** | Draft / Published / Deprecated |
| **Pricing** | Free tier + paid plans |

## Description

_What problem does this API solve? Who is it for? (2–5 sentences)_

## Endpoints

### `GET /endpoint-name`

**Description:** What this endpoint does.

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `q` | string | ✅ | Search query |
| `limit` | integer | ❌ | Max results (default: 10) |

**Headers (auto-added by RapidAPI):**

| Header | Description |
|--------|-------------|
| `X-RapidAPI-Key` | Your RapidAPI subscriber key |
| `X-RapidAPI-Host` | API host identifier |

**Example Request:**
```bash
curl -X GET "https://my-api.example.com/endpoint-name?q=hello&limit=5" \
  -H "X-RapidAPI-Key: YOUR_KEY" \
  -H "X-RapidAPI-Host: my-api-name.p.rapidapi.com"
```

**Example Response (200):**
```json
{
  "status": "success",
  "data": [],
  "count": 0
}
```

**Error Codes:**

| Code | Meaning |
|------|---------|
| 400 | Bad request / missing required params |
| 403 | Invalid or missing API key |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

---

## Pricing Plans

| Plan | Price | Requests/month | Rate limit |
|------|-------|----------------|------------|
| Basic | Free | 100 | 10/min |
| Pro | $9.99 | 10,000 | 60/min |
| Ultra | $29.99 | 100,000 | 300/min |

## Backend Details

| Field | Value |
|-------|-------|
| Hosting | e.g., Heroku |
| App Name | e.g., `my-api-heroku-app` |
| Repo | https://github.com/brocketdesign/my-api |
| Deploy | `git push heroku main` |

## Notes

_Any special notes, known limitations, or future plans._
