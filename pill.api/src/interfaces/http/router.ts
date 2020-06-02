import { Router } from 'express';

import authRouter from './routes/v1/auth';
import userRouter from './routes/v1/user';
import illnessRouter from './routes/v1/illness';
import medicineRouter from './routes/v1/medicine';
import symptomRouter from './routes/v1/symptom';
import recommendationRouter from './routes/v1/recommendation';
import illnessReviewRouter from './routes/v1/illnessReview';

export const router = () => Router()
	.use('/v1/auth', authRouter())
  .use('/v1/user', userRouter())
  .use('/v1/illness', illnessRouter())
  .use('/v1/medicine', medicineRouter())
  .use('/v1/symptom', symptomRouter())
	.use('/v1/recommendation', recommendationRouter())
	.use('/v1/illness-review', illnessReviewRouter());
