import dotenv from 'dotenv';
dotenv.config();

export const APILINK =
  process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com';
