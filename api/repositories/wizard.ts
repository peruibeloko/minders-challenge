import { House } from '@shared/houses.ts';

const BASE_URL = 'https://wizard-world-api.herokuapp.com';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const makeReq = (
  path: string,
  method: Method,
  body?: Record<string, unknown>
) => {
  return fetch(`${BASE_URL}${path}`, {
    method: method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: JSON.stringify(body)
  });
};

export const getHouses = async () => {
  const res = await makeReq('/Houses', 'GET');
  return (await res.json()) as House[];
};

export const getHouseById = async (id: string) => {
  const res = await makeReq(`/Houses/${id}`, 'GET');
  return (await res.json()) as House;
};
