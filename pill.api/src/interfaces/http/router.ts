import { Router } from 'express';

import userRouter from './routes/v1/user';
import illnessRouter from './routes/v1/illness';

export const router = () => Router()
  .use('/v1/user', userRouter())
  .use('/v1/illness', illnessRouter());
