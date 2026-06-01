# Daily Workflow — Publish One API Per Day

Run this workflow once per day. Target completion time: **1–3 hours**.

---

## Phase 1 — Ideation (15 min)

1. Open `workflows/find-api-ideas.md`
2. Pick **one idea** from the trending niches or generate a new one
3. Confirm it doesn't already exist on RapidAPI (search https://rapidapi.com/search/)
4. If it exists, check if yours can be better/cheaper/faster

**Output:** API name + one-line description + list of 2–4 endpoints

---

## Phase 2 — Build (30–60 min)

1. Copy a starter template:
   ```bash
   cp -r templates/express-api my-api-name
   # or
   cp -r templates/fastapi my-api-name
   ```
2. Follow `workflows/build-and-deploy.md`
3. Implement the endpoints (keep it simple — 2–3 endpoints max for day 1)
4. Test locally: `curl http://localhost:3000/endpoint`

**Output:** Working API running locally

---

## Phase 3 — Deploy (15–20 min)

1. Push to a new GitHub repo
2. Connect to Render.com (or Railway) and deploy
3. Verify the live URL responds: `curl https://your-api.onrender.com/health`
4. Set env var `RAPIDAPI_PROXY_SECRET` in the hosting dashboard (you'll get this in Phase 4)

**Output:** API live at a public HTTPS URL

---

## Phase 4 — Publish on RapidAPI (20–30 min)

Follow `workflows/publish-to-rapidapi.md` in full:

1. Create listing at https://rapidapi.com/provider → Add New API
2. Set base URL to your deployed API
3. Copy Proxy Secret → paste into hosting env vars
4. Import or manually add endpoints
5. Set pricing plans (follow `workflows/pricing-strategy.md`)
6. Write description + add code samples
7. Test in RapidAPI Playground
8. Set visibility to **Public**

**Output:** Live RapidAPI listing with a shareable URL

---

## Phase 5 — Log It (5 min)

Add a row to `published/README.md`:

```markdown
| My API Name | Category | $9.99/mo | https://rapidapi.com/brocketdesign/api/my-api | YYYY-MM-DD |
```

---

## Phase 6 — Promote (optional, 10 min)

- Share on Twitter/X with hashtag `#RapidAPI`
- Post in relevant Reddit communities (r/webdev, r/SideProject, r/startups)
- Add to your Product Hunt collection
- Share in Discord communities for developers

---

## Daily Review (5 min)

Check analytics for previously published APIs:
1. Go to https://rapidapi.com/provider → Analytics
2. Note any APIs gaining traction
3. If an API has subscribers, consider adding more endpoints or improving docs
4. If an API has 0 subscribers after 7 days, improve the title/description

---

## Weekly Review (15 min, every Sunday)

- [ ] Count total published APIs
- [ ] Count total active subscribers
- [ ] Identify top-performing API → invest more in it
- [ ] Identify ideas that got no traction → learn and iterate
- [ ] Plan 7 ideas for the coming week
