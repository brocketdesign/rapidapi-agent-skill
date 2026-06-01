# RapidAPI Agent Skill

An AI Agent skill that **finds, builds, deploys, and publishes a new API on [RapidAPI](https://rapidapi.com) every day** — creating a recurring passive income stream.

## How to Use This Skill

Share this repository URL with your AI Agent and say:

> "Follow the skill at https://github.com/brocketdesign/rapidapi-agent-skill and publish a new API on RapidAPI today."

The agent will:
1. Read [`SKILL.md`](./SKILL.md) — the complete knowledge base
2. Pick a profitable API idea
3. Build & deploy the API to a free host
4. Publish it on RapidAPI with pricing plans
5. Log the result in [`published/`](./published/)

---

## Prerequisites (one-time setup)

| Account | URL | Cost |
|---------|-----|------|
| RapidAPI Provider | https://rapidapi.com/provider | Free |
| GitHub | https://github.com | Free |
| Render / Railway / Heroku | (see `setup/credentials.md`) | Free tier |
| OpenAI / Anthropic (optional) | For AI-powered APIs | Pay per use |

Fill in [`setup/credentials.md`](./setup/credentials.md) with your keys before the agent starts.

---

## Repository Structure

```
├── SKILL.md                        # 🧠 Master knowledge file (start here)
├── setup/
│   └── credentials.md             # Keys & environment variables template
├── workflows/
│   ├── daily-workflow.md          # Step-by-step daily routine
│   ├── find-api-ideas.md          # How to find profitable niches
│   ├── build-and-deploy.md        # Build & deploy in < 1 hour
│   ├── publish-to-rapidapi.md     # RapidAPI publishing guide
│   └── pricing-strategy.md        # Pricing plans for max revenue
├── templates/
│   ├── api-readme.md              # Per-API documentation template
│   ├── openapi-spec.yaml          # OpenAPI 3.0 spec template
│   ├── express-api/index.js       # Node.js starter
│   └── fastapi/main.py            # Python starter
└── published/
    └── README.md                  # Log of all published APIs
```

---

## Income Potential

| Scenario | APIs Live | Avg Subscribers | Monthly Revenue |
|----------|-----------|-----------------|-----------------|
| Conservative | 10 | 5/API @ $9.99 | ~$500 |
| Moderate | 30 | 10/API @ $9.99 | ~$3,000 |
| Optimistic | 100 | 20/API @ $9.99 | ~$20,000 |

> Revenue compounds as you publish more APIs. Each one is a new revenue stream.

---

## Contributing

Pull requests welcome — especially new API ideas, templates, and workflow improvements.
