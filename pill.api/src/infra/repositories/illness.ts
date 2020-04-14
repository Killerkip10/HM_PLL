import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { IIllness } from '../../domain';
import { Illness } from '../models/Illness';
import { Symptom } from '../models/Symptom';
import { Medicine } from '../models/Medicine';

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
          model: Medicine,
          attributes: { exclude: [...DATE_ATTRIBUTES_EXCLUDE, 'typeMedicineId', 'routeId', 'productionMedicineMethodId'] },
          through: { attributes: [] },
        },
      ],
    });
  }

  public create(illness: IIllness) {
    return Illness.create(illness);
  }
}