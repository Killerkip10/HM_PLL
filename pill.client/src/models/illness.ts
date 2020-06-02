import { ISymptom } from './symptom';
import { IMedicine } from './medicine';
import { IRecommendation } from './recommendation';

export interface IIllnessShort {
	id: number;
	name: string;
	rating?: number;
	updatedAt?: string;
	createdAt?: string;
}

export interface IIllness extends IIllnessShort {
	description: string;
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
