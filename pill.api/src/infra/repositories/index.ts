import { UserRepository } from './user';
import { IllnessRepository } from './illness';
import { MedicineRepository } from './medicine';
import { SymptomRepository } from './symptom';

interface IRepository {
  userRepository: UserRepository;
  illnessRepository: IllnessRepository;
  medicineRepository: MedicineRepository;
  symptomRepository: SymptomRepository;
}

const repository = () => ({
  userRepository: new UserRepository(),
  illnessRepository: new IllnessRepository(),
  medicineRepository: new MedicineRepository(),
	symptomRepository: new SymptomRepository(),
});

export {
  repository,
  IRepository,
  UserRepository,
  IllnessRepository,
  MedicineRepository,
	SymptomRepository,
};
