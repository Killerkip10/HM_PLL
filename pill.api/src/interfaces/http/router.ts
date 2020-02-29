import { Router } from 'express';

import userRouter from './routes/v1/user';

export const router = () => Router()
  .use('/v1/user', userRouter());
