import { Hono } from 'hono';

import * as handlers from '@/services/houses.ts';

const houses = new Hono();

houses.get('/', handlers.getHouses);
houses.get('/:id', handlers.getHouseById);

export default houses;
