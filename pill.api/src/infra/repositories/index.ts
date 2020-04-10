import { UserRepository } from './user';
import { IllnessRepository } from './illness';
import { MedicineRepository } from './medicine';

interface IRepository {
  userRepository: UserRepository;
  illnessRepository: IllnessRepository;
  medicineRepository: MedicineRepository;
}

const repository = () => ({
  userRepository: new UserRepository(),
  illnessRepository: new IllnessRepository(),
  medicineRepository: new MedicineRepository(),
});

export {
  repository,
  IRepository,
  UserRepository,
  IllnessRepository,
  MedicineRepository,
};
