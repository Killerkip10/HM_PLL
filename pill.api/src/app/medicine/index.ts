import { Get } from './get';
import { Post } from './post';
import { MedicineRepository } from '../../infra/repositories';

export interface IMedicine {
  Get: new (medicineRepository: MedicineRepository) => Get;
  Post: new (medicineRepository: MedicineRepository) => Post;
}

export const medicine = {
  Get,
  Post,
};

export {
  Get,
  Post,
};
