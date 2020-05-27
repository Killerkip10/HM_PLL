import { ISymptom } from './symptom';
import { IMedicine } from './medicine';
import { IRecommendation } from './recommendation';

export interface IIllnessShort {
	id: number;
	name: string;
	description: string;
}

export interface IIllness extends IIllnessShort {
	updatedAt: string;
	symptoms: ISymptom[];
	medicines: IMedicine[];
	recommendations: IRecommendation[];
}

export interface ICreateIllness extends IIllnessShort {
	symptomsIds: number[];
	medicinesIds: number[];
	symptomsIds: number[];
}
