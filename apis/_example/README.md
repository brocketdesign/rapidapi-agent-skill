# _example — API Scaffold

This folder is a scaffold. Copy it to `apis/your-api-name/` to start a new API.

## Files

- `spec.yaml` — OpenAPI 3.0 specification. Import this directly into RapidAPI.
- `README.md` — Copy `docs/api-template.md` here and fill in the details.

## Usage

```bash
cp -r apis/_example apis/my-new-api
```

Then:
1. Edit `apis/my-new-api/spec.yaml` with your real endpoints.
2. Copy `docs/api-template.md` → `apis/my-new-api/README.md` and fill in.
3. Follow `docs/publish-guide.md` to publish.
