import { user, IUser } from './user';
import { illness, IIllness } from './illness';
import { medicine, IMedicine } from './medicine';
import { symptom, ISymptom } from './symptom';
import { recommendation, IRecommendation } from './recommendation';
import { illnessReview, IIllnessReview } from './illnessReview';

export interface IApp {
  start: () => void;
}

export interface IMethods {
  user: IUser;
  illness: IIllness;
  medicine: IMedicine;
  symptom: ISymptom;
  recommendation: IRecommendation;
  illnessReview: IIllnessReview;
}

export const app = ({ server, database }): IApp => ({
	start: () => Promise.resolve()
		.then(database.connect)
		.then(server.start),
});

export const methods = (): IMethods => ({
  user,
  illness,
  medicine,
	symptom,
	recommendation,
	illnessReview,
});
