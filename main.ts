import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serveStatic } from 'hono/deno';

import { routes } from '@/router.ts';

const app = new Hono();

app.use(cors());

app.use(async (c, next) => {
  console.log(`${c.req.method.toUpperCase()} ${c.req.path}`);
  await next();
});

app.route('/api/', routes);
app.use('*', serveStatic({ root: './dist/' }));
app.use('*', serveStatic({ path: './dist/index.html' }));

Deno.serve({ port: 80 }, app.fetch);
