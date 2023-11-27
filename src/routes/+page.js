// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  const res = await fetch('/api');

  if (res.ok) return { users: await res.json() };
  throw error(500);
}
