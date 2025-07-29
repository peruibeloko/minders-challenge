import { Hono } from 'hono';

import houses from '@/routes/houses.ts';

const routes = new Hono();

routes.route('/houses', houses);

export { routes };
