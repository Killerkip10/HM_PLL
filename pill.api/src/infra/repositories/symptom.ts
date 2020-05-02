import { Symptom } from '../models/Symptom';
import { DATE_ATTRIBUTES_EXCLUDE } from './constants';

export class SymptomRepository {
	public getAll(...args) {
		return Symptom.findAll({
			attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
			...args,
		});
	}
}
