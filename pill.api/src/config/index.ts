import dotenv from 'dotenv';

import { DB } from './database';

const {
  parsed: {
    PORT = '3000',
		SESSION_NAME = 'auth',
		SESSION_SECRET = 'secret',
		SESSION_SAVE_UNINITIALIZED = false,
		SESSION_RESAVE = false,
		SESSIONS_COOKIE_MAX_AGE = 1000 * 60 * 60,
  } = {},
} = dotenv.config();

export const config = {
  PORT,
	SESSION: {
		name: SESSION_NAME,
		secret: SESSION_SECRET,
		saveUninitialized: SESSION_SAVE_UNINITIALIZED,
		resave: SESSION_RESAVE,
		cookie: {
			maxAge: SESSIONS_COOKIE_MAX_AGE,
		},
	},
  ...DB,
};