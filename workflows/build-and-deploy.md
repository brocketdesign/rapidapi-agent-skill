# Build & Deploy an API in Under 1 Hour

## Option A: Node.js + Express (Recommended for most APIs)

### Step 1 — Scaffold

```bash
mkdir my-api && cd my-api
npm init -y
npm install express axios dotenv cors
cp /path/to/rapidapi-agent-skill/templates/express-api/index.js .
```

### Step 2 — Implement Your Endpoints

Edit `index.js`:
- Add your endpoints inside the `// YOUR ENDPOINTS HERE` section
- Each endpoint should: validate params → fetch/compute → return JSON
- Keep it under 200 lines for day-1 release

### Step 3 — Test Locally

```bash
node index.js
# In another terminal:
curl "http://localhost:3000/health"
curl "http://localhost:3000/your-endpoint?param=value"
```

### Step 4 — Push to GitHub

```bash
git init && git add . && git commit -m "Initial API"
gh repo create my-api-name --public --push --source=.
```

### Step 5 — Deploy to Render.com (Free, Always-On)

1. Go to https://render.com → New → Web Service
2. Connect your GitHub repo
3. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Environment:** Node
   - **Plan:** Free
4. Add env vars:
   - `PORT` = `3000`
   - `RAPIDAPI_PROXY_SECRET` = *(get this from RapidAPI after creating the listing)*
   - Any API keys your service needs
5. Click **Deploy**
6. Wait ~2 min → copy the live URL (e.g., `https://my-api.onrender.com`)

---

## Option B: Python + FastAPI

### Step 1 — Scaffold

```bash
mkdir my-api && cd my-api
python -m venv venv && source venv/bin/activate
pip install fastapi uvicorn httpx python-dotenv
cp /path/to/rapidapi-agent-skill/templates/fastapi/main.py .
echo "uvicorn main:app --host 0.0.0.0 --port \$PORT" > start.sh
echo "fastapi\nuvicorn\nhttpx\npython-dotenv" > requirements.txt
```

### Step 2 — Implement Your Endpoints

Edit `main.py` inside the `# YOUR ENDPOINTS HERE` section.

### Step 3 — Test Locally

```bash
uvicorn main:app --reload
curl "http://localhost:8000/health"
```

### Step 4 — Push to GitHub & Deploy to Render

Same as Option A, but:
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`

---

## Health Check Endpoint (Required)

Always include a `/health` endpoint — RapidAPI uses it to verify your server is up:

```json
GET /health
→ { "status": "ok", "version": "1.0.0" }
```

---

## Response Format Standards

Every endpoint should return:

**Success:**
```json
{
  "status": "success",
  "data": { ... },
  "cached": false
}
```

**Error:**
```json
{
  "status": "error",
  "message": "The 'q' parameter is required",
  "code": 400
}
```

---

## Caching (Optional but Recommended)

Add simple in-memory caching to reduce external API calls and improve speed:

**Node.js:**
```js
const cache = new Map();
const TTL = 60 * 1000; // 1 minute

function getCache(key) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.ts < TTL) return hit.data;
  return null;
}
function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() });
}
```

---

## Checklist Before Moving to Publish

- [ ] `/health` returns 200 OK
- [ ] All endpoints return JSON
- [ ] Proxy secret validation is active
- [ ] Env vars set in hosting dashboard
- [ ] Live URL tested with `curl`
- [ ] Response time < 2 seconds
