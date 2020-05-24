import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { IIllness } from '../../domain';
import { Illness } from '../models/Illness';
import { Symptom } from '../models/Symptom';
import { Medicine } from '../models/Medicine';
import { Recommendation } from '../models/Recommendation';

export class IllnessRepository {
  public getAll() {
    return Illness.findAll({
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

  public create(illness: IIllness) {
    return Illness.create(illness);
  }
}
