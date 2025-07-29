import { Handler } from 'hono';

import * as WizardAPI from '@/repositories/wizard.ts';

export const getHouses: Handler = async c => {
  const data = (await WizardAPI.getHouses()).map(h => ({
    id: h.id,
    name: h.name
  }));
  return c.json(data);
};

export const getHouseById: Handler = async c => {
  const data = await WizardAPI.getHouseById(c.req.param('id'));
  return c.json(data);
};
