import { Hono } from '@hono/hono';
import { cors } from '@hono/hono/cors';

import { routes } from '@/router.ts';

const app = new Hono();

app.use(cors());

app.use(async (c, next) => {
  console.log(`${c.req.method.toUpperCase()} ${c.req.path}`);
  await next();
});

app.route('/api/', routes);

Deno.serve({ port: 8080 }, app.fetch);
