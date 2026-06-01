# RapidAPI Keys & Credentials

> ⚠️ **NEVER commit real secrets to this file.** Fill in the values locally only,
> or store secrets in a password manager / environment variables.

---

## RapidAPI Account

| Field | Value |
|-------|-------|
| RapidAPI Account Email | `YOUR_EMAIL@example.com` |
| RapidAPI Provider Dashboard URL | https://rapidapi.com/provider |
| RapidAPI Provider API Key (X-RapidAPI-Key) | `YOUR_RAPIDAPI_KEY` |
| RapidAPI Provider Secret | `YOUR_RAPIDAPI_SECRET` |

## Stripe / Billing (for paid plans)

| Field | Value |
|-------|-------|
| Stripe Account Email | `YOUR_STRIPE_EMAIL` |
| Stripe Public Key | `pk_live_...` |
| Stripe Secret Key | `sk_live_...` (never commit this) |

## Your API Backend Hosting

| Field | Value |
|-------|-------|
| Hosting Provider | e.g., Heroku / Vercel / AWS |
| Base URL (production) | `https://your-api.example.com` |
| Base URL (staging) | `https://staging.your-api.example.com` |
| Heroku App Name | e.g., `my-api-service` |
| Deploy Command | e.g., `git push heroku main` |

## Environment Variables (Backend)

Copy these into your hosting provider's config:

```
RAPIDAPI_PROXY_SECRET=YOUR_RAPIDAPI_PROXY_SECRET
DATABASE_URL=
REDIS_URL=
API_KEY_SALT=
NODE_ENV=production
PORT=8080
```

> The `RAPIDAPI_PROXY_SECRET` is found in the RapidAPI Provider Dashboard under
> **API Settings → Security → Proxy Secret**. Use it to verify requests truly
> come from RapidAPI and reject direct calls.

## Webhook Endpoints (RapidAPI → Your Server)

| Event | Your Endpoint |
|-------|--------------|
| Subscription created | `POST /webhooks/rapidapi/subscribe` |
| Subscription cancelled | `POST /webhooks/rapidapi/unsubscribe` |
| Plan upgrade/downgrade | `POST /webhooks/rapidapi/plan-change` |

---

## How to Rotate Keys

1. Generate a new key in RapidAPI Provider Dashboard.
2. Update the key in your hosting provider's env vars.
3. Update this file (locally).
4. Verify API calls still succeed before revoking the old key.
