import { Get } from './get';
import { SymptomRepository } from '../../infra/repositories';

export interface ISymptom {
	Get: new (symptomRepository: SymptomRepository) => Get;
}

export const symptom = {
	Get,
};

export {
	Get,
};
