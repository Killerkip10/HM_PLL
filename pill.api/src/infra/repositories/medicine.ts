import { Medicine } from '../models/Medicine';
import { Route } from '../models/Route';
import { IMedicine } from '../../domain';

export class MedicineRepository {
  public getAll() {
    return Medicine.findAll({
      attributes: { exclude: ['typeId', 'routeId', 'productionMethodId'] },
      include: [Route],
    });
  }

  public create(medicine: IMedicine) {
    return Medicine.create(medicine);
  }
}