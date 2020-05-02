import { Router } from 'express';

import authRouter from './routes/v1/auth';
import userRouter from './routes/v1/user';
import illnessRouter from './routes/v1/illness';
import medicineRouter from './routes/v1/medicine';
import symptomRouter from './routes/v1/symptom';

export const router = () => Router()
	.use('/v1/auth', authRouter())
  .use('/v1/user', userRouter())
  .use('/v1/illness', illnessRouter())
  .use('/v1/medicine', medicineRouter())
  .use('/v1/symptom', symptomRouter());
