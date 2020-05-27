import { Get } from './get';
import { Post } from './post';
import { Put } from './put';
import { Delete } from './delete';
import { SymptomRepository } from '../../infra/repositories';

export interface ISymptom {
	Get: new (symptomRepository: SymptomRepository) => Get;
	Post: new (symptomRepository: SymptomRepository) => Post;
	Put: new (symptomRepository: SymptomRepository) => Put;
	Delete: new (symptomRepository: SymptomRepository) => Delete;
}

export const symptom = {
	Get,
	Post,
	Put,
	Delete,
};

export {
	Get,
	Post,
	Put,
	Delete,
};
