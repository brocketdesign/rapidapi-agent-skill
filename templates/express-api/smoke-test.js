// Smoke test template — verify your API before publishing. Run: npm run smoke-test
// Requires index.js to export { app }: add `module.exports = { app };` at the end.
const http = require('http');
process.env.NODE_ENV = 'test';
const { app } = require('./index.js');

const server = app.listen(0, async () => {
  const base = `http://127.0.0.1:${server.address().port}`;
  let failures = 0;

  function req(method, path, body) {
    return new Promise((resolve, reject) => {
      const data = body ? JSON.stringify(body) : null;
      const r = http.request(
        base + path,
        { method, headers: data ? { 'Content-Type': 'application/json' } : {} },
        res => {
          let buf = '';
          res.on('data', c => (buf += c));
          res.on('end', () => resolve({ status: res.statusCode, json: safeParse(buf) }));
        }
      );
      r.on('error', reject);
      if (data) r.write(data);
      r.end();
    });
  }
  const safeParse = s => { try { return JSON.parse(s); } catch { return s; } };
  const check = (name, cond) => {
    if (cond) console.log(`  \u2713 ${name}`);
    else { console.error(`  \u2717 ${name}`); failures++; }
  };

  try {
    const health = await req('GET', '/health');
    check('GET /health \u2192 200 + status ok', health.status === 200 && health.json.status === 'ok');

    // TODO: add a check per endpoint you implemented, e.g.:
    // const ok = await req('GET', '/endpoint?q=test');
    // check('GET /endpoint \u2192 200 success', ok.status === 200 && ok.json.status === 'success');

    const notFound = await req('GET', '/__nope__');
    check('unknown route \u2192 404', notFound.status === 404);

    console.log(failures === 0 ? '\nAll smoke tests passed \u2705' : `\n${failures} test(s) failed \u274c`);
  } catch (e) {
    console.error('Smoke test crashed:', e);
    failures++;
  } finally {
    server.close();
    process.exit(failures === 0 ? 0 : 1);
  }
});
