import { Symptom } from '../models/Symptom';
import { DATE_ATTRIBUTES_EXCLUDE } from './constants';

import { ISymptom } from '../../domain';

export class SymptomRepository {
	public getAll(query) {
		return Symptom.findAll({ where: query });
	}

	public getAllShort() {
		return Symptom.findAll({
			attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
		});
	}

	public create(symptom: ISymptom) {
		return Symptom.create(symptom);
	}

	public async update({ id, ...params }: ISymptom) {
		const symptom = await Symptom.findOne({ where: { id } });

		return await symptom.update(params);
	}

	public delete(id: number) {
		return Symptom.destroy( { where: { id } });
	}
}
