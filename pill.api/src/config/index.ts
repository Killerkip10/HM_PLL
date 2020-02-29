import dotenv from 'dotenv';

import { DB } from './database';

const {
  parsed: {
    PORT = 3000,
  },
} = dotenv.config();

export const config = {
  PORT,
  ...DB,
};