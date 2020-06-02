import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { getMedicineConflicts, getGroupConflicts } from '../utils';
import { IMedicineConflicts } from '../interfaces';
import { IMedicine } from '../../domain';
import { Medicine } from '../models/Medicine';
import { Route } from '../models/Route';
import { TypeMedicine } from '../models/TypeMedicine';
import { ProductionMedicineMethod } from '../models/ProductionMedicineMethod';
import { MedicineConflict } from '../models/MedicineConflict';
import { MedicineGroup } from '../models/MedicineGroup';
import { MedicineGroupConflict } from '../models/MedicineGroupConflict';
import { Illness } from '../models/Illness';

export class MedicineRepository {
  public getAll() {
    return Medicine.findAll({
      attributes: { exclude: ['typeMedicineId', 'routeId', 'productionMedicineMethodId'] },
      include: [
        {
          model: Route,
          attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
        },
        {
          model: TypeMedicine,
          attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
        },
        {
          model: ProductionMedicineMethod,
          attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
        },
      ],
    });
  }

  public getAllByIllnessId(illnessId: number) {
  	return Medicine.findAll({
			attributes: ['id', 'name'],
			include: {
				model: Illness,
				where: { id: illnessId },
				attributes: [],
			},
		});
	}

  public create(medicine: IMedicine) {
    return Medicine.create(medicine);
  }

  public async getMedicineConflicts(medicineIds: number[]): Promise<IMedicineConflicts> {
    const [medicineConflictsArr, medicineGroupsArr, medicineGroupConflictsArr] = await Promise.all([
      MedicineConflict.findAll({
        attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
        where: {
          medicineId: medicineIds,
          conflictMedicineId: medicineIds,
        },
      }),
      MedicineGroup.findAll({
        attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
        where: { medicineId: medicineIds },
      }),
      MedicineGroupConflict.findAll({
        attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
        where: { medicineId: medicineIds },
      }),
    ]);

    const medicineConflicts = getMedicineConflicts(medicineConflictsArr);
    const groupConflicts = getGroupConflicts(medicineGroupsArr, medicineGroupConflictsArr, medicineConflicts);

    return {
      medicineConflicts,
      groupConflicts,
    };
  }
}
