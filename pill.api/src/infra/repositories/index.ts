import { UserRepository } from './user';
import { IllnessRepository } from './illness';
import { MedicineRepository } from './medicine';
import { SymptomRepository } from './symptom';
import { RecommendationRepository } from './recommendation';

interface IRepository {
  userRepository: UserRepository;
  illnessRepository: IllnessRepository;
  medicineRepository: MedicineRepository;
  symptomRepository: SymptomRepository;
  recommendationRepository: RecommendationRepository;
}

const repository = (): IRepository => ({
  userRepository: new UserRepository(),
  illnessRepository: new IllnessRepository(),
  medicineRepository: new MedicineRepository(),
	symptomRepository: new SymptomRepository(),
	recommendationRepository: new RecommendationRepository(),
});

export {
  repository,
  IRepository,
  UserRepository,
  IllnessRepository,
  MedicineRepository,
	SymptomRepository,
	RecommendationRepository,
};
