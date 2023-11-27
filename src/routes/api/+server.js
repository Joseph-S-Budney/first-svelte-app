import faker from 'faker';
import { json } from '@sveltejs/kit';

const generateCovers = () =>
  [...Array(50)].map(() => {
    const lastName = faker.name.lastName();
    return { avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${lastName}`, lastName };
  });

export function GET() {
  return json(generateCovers());
}
