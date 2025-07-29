import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { routes } from '@/router.ts';

const api = new Hono();

api.use(cors());

api.use(async (c, next) => {
  console.log(`${c.req.method.toUpperCase()} ${c.req.path}`);
  await next();
});

api.route('/api/', routes);

Deno.serve({ port: 8080 }, api.fetch);
