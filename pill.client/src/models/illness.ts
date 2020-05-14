import { ISymptom } from './symptom';

export interface IIllnessShort {
	id: number;
	name: string;
	description: string;
}

export interface IIllness extends IIllnessShort {
	symptoms: ISymptom[];
}

