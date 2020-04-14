import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { IMedicine } from '../../domain';
import { Medicine } from '../models/Medicine';
import { Route } from '../models/Route';
import { TypeMedicine } from '../models/TypeMedicine';
import { ProductionMedicineMethod } from '../models/ProductionMedicineMethod';

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

  public create(medicine: IMedicine) {
    return Medicine.create(medicine);
  }
}