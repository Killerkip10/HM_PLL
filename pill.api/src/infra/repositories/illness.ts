import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { ICreateIllness } from '../../domain';
import { Illness } from '../models/Illness';
import { Symptom } from '../models/Symptom';
import { Medicine } from '../models/Medicine';
import { Recommendation } from '../models/Recommendation';
import { IllnessSymptom } from '../models/IllnessSymptom';
import { IllnessMedicine } from '../models/IllnessMedicine';
import { IllnessRecommendation } from '../models/IllnessRecommendation';

export class IllnessRepository {
	public getAll(query: object) {
		return Illness.findAll({ where: query });
	}

  public getById(id: number) {
		return Illness.findOne({
			where: { id },
			include: [
				{
					model: Symptom,
					attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
					through: { attributes: [] },
				},
				{
					model: Recommendation,
					attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
					through: { attributes: [] },
				},
				{
					model: Medicine,
					attributes: { exclude: [...DATE_ATTRIBUTES_EXCLUDE, 'typeMedicineId', 'routeId', 'productionMedicineMethodId'] },
					through: { attributes: [] },
				},
			],
		});
	}

  public getBySymptomIds(ids: number[]) {
		return Illness.findAll({
			attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
			include: [
				{
					model: Symptom,
					where: { id: ids },
					attributes: [],
				},
			],
		});
	}

  public async create(illness: ICreateIllness) {
    const { id: illnessId } = await Illness.create(illness);

    await Promise.all([
			IllnessSymptom.bulkCreate(illness.symptomsIds.map(symptomId => ({ symptomId, illnessId }))),
			IllnessMedicine.bulkCreate(illness.medicinesIds.map(medicineId => ({ medicineId, illnessId }))),
			IllnessRecommendation.bulkCreate(illness.recommendationsIds.map(recommendationId => ({ recommendationId, illnessId }))),
		]);
  }
}
