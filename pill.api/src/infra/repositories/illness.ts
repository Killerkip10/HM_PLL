import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { ICreateIllness } from '../../domain';
import { Illness } from '../models/Illness';
import { Symptom } from '../models/Symptom';
import { Medicine } from '../models/Medicine';
import { Recommendation } from '../models/Recommendation';
import { IllnessSymptom } from '../models/IllnessSymptom';
import { IllnessMedicine } from '../models/IllnessMedicine';
import { IllnessRecommendation } from '../models/IllnessRecommendation';
import { IllnessReview } from '../models/IllnessReview';
import { IllnessReviewMedicine } from '../models/IllnessReviewMedicine';

import { getAverageRating } from '../utils';

export class IllnessRepository {
	public getAll(query: object) {
		return Illness.findAll({ where: query });
	}

	public getAllShort() {
		return Illness.findAll({
			attributes: {
				exclude: ['description'],
			},
		});
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
				{
					model: IllnessReview,
					include: [{
						model: IllnessReviewMedicine,
					}],
				},
			],
		});
	}

  public async getBySymptomIds(ids: number[]) {
		const illnesses = await Illness.findAll({
			attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
			include: [
				{
					model: Symptom,
					where: { id: ids },
					attributes: [],
				},
				{
					model: IllnessReview,
					include: [{
						model: IllnessReviewMedicine,
					}],
				},
			],
		});

		return illnesses.map(({ id, name, reviews }) => ({
			id,
			name,
			rating: getAverageRating(reviews),
		}));
	}

  public async create(illness: ICreateIllness) {
    const { id: illnessId } = await Illness.create(illness);

    await Promise.all([
			IllnessSymptom.bulkCreate(illness.symptomsIds.map(symptomId => ({ symptomId, illnessId }))),
			IllnessMedicine.bulkCreate(illness.medicinesIds.map(medicineId => ({ medicineId, illnessId }))),
			IllnessRecommendation.bulkCreate(illness.recommendationsIds.map(recommendationId => ({ recommendationId, illnessId }))),
		]);
  }

  public delete(id: number) {
		return Illness.destroy({ where: { id } });
	}
}
