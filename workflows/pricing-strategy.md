# Pricing Strategy for Maximum Revenue

## The Standard Tier Structure

Use this structure for every API you publish:

| Plan | Price | Requests/month | Rate limit | Purpose |
|------|-------|----------------|------------|---------|
| **Basic** | **Free** | 100 | 5 req/min | Attract users, let them test |
| **Pro** | **$9.99/mo** | 10,000 | 60 req/min | Main revenue driver |
| **Ultra** | **$29.99/mo** | 100,000 | 300 req/min | Power users |
| **Mega** | **$99.99/mo** | Unlimited | 1,000 req/min | Enterprises |

---

## Why This Structure Works

- **Free tier** removes the barrier to try → more subscribers overall
- **$9.99** is a psychological sweet spot — impulse-buy territory
- **Hard limits** on free tier force upgrade (100 requests disappears fast)
- **Unlimited** mega plan captures enterprise clients who won't negotiate on price

---

## Setting Overage Pricing

Enable **"Pay Per Use"** overages on Pro/Ultra plans:
- Set overage rate: **$0.001 per request** beyond the monthly limit
- This turns active users into unlimited revenue without plan upgrades

---

## When to Adjust Pricing

| Signal | Action |
|--------|--------|
| 0 subscribers after 2 weeks | Lower Pro to $4.99 or increase Free limit to 500 |
| Free tier full, no upgrades | Add a compelling feature to Pro only |
| Many Ultra subscribers | Raise Ultra to $49.99 |
| Enterprise inquiries | Add a custom $299/mo plan |
| High churn on Pro | Investigate — improve reliability or add more endpoints |

---

## Revenue Targets

| APIs Published | Avg 5 Pro subs each | Gross Revenue | Your 75% share |
|----------------|--------------------|-|----------------|
| 5 | $9.99 × 5 × 5 | ~$250 | ~$187 |
| 15 | $9.99 × 5 × 15 | ~$750 | ~$562 |
| 30 | $9.99 × 5 × 30 | ~$1,500 | ~$1,125 |
| 100 | $9.99 × 5 × 100 | ~$5,000 | ~$3,750 |

> RapidAPI takes a flat **25% marketplace fee**. Payouts via **PayPal** in the first week of the following month.

---

## Category-Specific Pricing Notes

- **AI / NLP APIs**: Charge more ($19.99–$49.99) — higher perceived value
- **Finance / Crypto**: $14.99 base — financial data is high-value
- **Simple utility APIs** (QR, URL shortener): $4.99 — high volume, low friction
- **Social media scrapers**: $19.99+ — high demand, high compute cost
- **Developer tools**: $9.99 — developers are comfortable paying for tools

---

## Tips

1. **Never make Pro cheaper than $4.99** — it signals low quality
2. **Always have a Free tier** — APIs with no free tier get far fewer subscribers
3. **Set hard limits on Free** — "Soft" limits that don't enforce create angry paying users
4. **Enable overages** — passive revenue from heavy users
5. **Review pricing monthly** — raise prices on APIs with growing subscriber counts
