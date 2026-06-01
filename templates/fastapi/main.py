# FastAPI Template — RapidAPI Agent Skill
# Copy this file, implement your endpoints, deploy to Render/Railway

from fastapi import FastAPI, Header, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
import time
from functools import lru_cache
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="My API",
    description="Replace with your API description",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

RAPIDAPI_PROXY_SECRET = os.getenv("RAPIDAPI_PROXY_SECRET")

# ── Security dependency ────────────────────────────────────────────────────
async def verify_rapidapi(x_rapidapi_proxy_secret: str = Header(default=None)):
    if os.getenv("NODE_ENV") == "production":
        if x_rapidapi_proxy_secret != RAPIDAPI_PROXY_SECRET:
            raise HTTPException(status_code=403, detail="Access denied")

# ── Simple in-memory cache ─────────────────────────────────────────────────
_cache: dict = {}
CACHE_TTL = 60  # seconds

def get_cache(key: str):
    hit = _cache.get(key)
    if hit and time.time() - hit["ts"] < CACHE_TTL:
        return hit["data"]
    return None

def set_cache(key: str, data: dict):
    _cache[key] = {"data": data, "ts": time.time()}

# ── Health check (required by RapidAPI) ───────────────────────────────────
@app.get("/health")
def health():
    return {"status": "ok", "version": "1.0.0"}

# ── YOUR ENDPOINTS HERE ────────────────────────────────────────────────────

@app.get("/endpoint")
async def endpoint(
    q: str = Query(..., description="Search query"),
    limit: int = Query(10, ge=1, le=100, description="Max results"),
    x_rapidapi_proxy_secret: str = Header(default=None),
):
    await verify_rapidapi(x_rapidapi_proxy_secret)

    cache_key = f"endpoint:{q}:{limit}"
    cached = get_cache(cache_key)
    if cached:
        return {**cached, "cached": True}

    # TODO: Replace with your actual logic / upstream API call
    result = {
        "status": "success",
        "data": {"query": q, "result": "Replace this with real data"},
        "cached": False,
    }

    set_cache(cache_key, result)
    return result
