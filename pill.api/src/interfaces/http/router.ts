import { Router } from 'express';

import userRouter from './routes/v1/user';
import illnessRouter from './routes/v1/illness';
import medicineRouter from './routes/v1/medicine';

export const router = () => Router()
  .use('/v1/user', userRouter())
  .use('/v1/illness', illnessRouter())
  .use('/v1/medicine', medicineRouter());
