# [API Name] — Documentation

> Copy this file to `published/[api-name].md` and fill it in.

## Overview

| Field | Value |
|-------|-------|
| **API Name** | My API Name |
| **Category** | e.g., NLP / Finance / Tools |
| **RapidAPI URL** | https://rapidapi.com/brocketdesign/api/my-api |
| **Backend Repo** | https://github.com/brocketdesign/my-api |
| **Hosting** | Render / Railway / Heroku |
| **Live URL** | https://my-api.onrender.com |
| **Published** | YYYY-MM-DD |
| **Status** | 🟢 Live |

## Description

*What problem does this API solve? Who is it for? (2–5 sentences)*

## Endpoints

### `GET /endpoint`

**Description:** What this endpoint does.

**Parameters:**

| Param | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `q` | string | ✅ | Input query | `"hello"` |
| `limit` | integer | ❌ | Max results (default: 10) | `5` |

**Example Response:**
```json
{
  "status": "success",
  "data": {},
  "cached": false
}
```

## Pricing Plans

| Plan | Price | Requests/month | Rate limit |
|------|-------|----------------|------------|
| Basic | Free | 100 | 5/min |
| Pro | $9.99 | 10,000 | 60/min |
| Ultra | $29.99 | 100,000 | 300/min |

## Performance

| Metric | Value |
|--------|-------|
| Avg response time | ~XXXms |
| Uptime | 99.X% |

## Notes

*Any limitations, known issues, or plans for new endpoints.*
