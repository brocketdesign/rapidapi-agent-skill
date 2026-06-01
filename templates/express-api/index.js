// Express API Template — RapidAPI Agent Skill
// Copy this file, implement your endpoints, deploy to Render/Railway/Heroku

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ── Health check (required) — exempt from auth so hosting/uptime checks pass ─
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0' });
});

// ── Security: reject requests not coming through RapidAPI ──────────────────
app.use((req, res, next) => {
  const secret = req.headers['x-rapidapi-proxy-secret'];
  if (process.env.NODE_ENV === 'production' && secret !== process.env.RAPIDAPI_PROXY_SECRET) {
    return res.status(403).json({ status: 'error', message: 'Access denied' });
  }
  next();
});

// ── Simple in-memory cache ─────────────────────────────────────────────────
const cache = new Map();
const CACHE_TTL = 60 * 1000; // 1 minute

function getCache(key) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.ts < CACHE_TTL) return hit.data;
  return null;
}
function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() });
}

// ── Health check (required) — exempt from auth so hosting/uptime checks pass ─
// (defined above, before the security middleware)

// ── YOUR ENDPOINTS HERE ────────────────────────────────────────────────────

app.get('/endpoint', async (req, res) => {
  const { q, limit = 10 } = req.query;

  if (!q) {
    return res.status(400).json({
      status: 'error',
      message: "The 'q' parameter is required",
    });
  }

  const cacheKey = `endpoint:${q}:${limit}`;
  const cached = getCache(cacheKey);
  if (cached) return res.json({ ...cached, cached: true });

  try {
    // TODO: Replace with your actual logic / upstream API call
    const result = {
      status: 'success',
      data: { query: q, result: 'Replace this with real data' },
      cached: false,
    };

    setCache(cacheKey, result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// ── 404 handler ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Endpoint not found' });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));

module.exports = { app };
