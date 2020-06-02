import { UserRepository } from './user';
import { IllnessRepository } from './illness';
import { MedicineRepository } from './medicine';
import { SymptomRepository } from './symptom';
import { RecommendationRepository } from './recommendation';
import { IllnessReviewRepository } from './illnessReview';

interface IRepository {
  userRepository: UserRepository;
  illnessRepository: IllnessRepository;
  medicineRepository: MedicineRepository;
  symptomRepository: SymptomRepository;
  recommendationRepository: RecommendationRepository;
  illnessReviewRepository: IllnessReviewRepository,
}

const repository = (): IRepository => ({
  userRepository: new UserRepository(),
  illnessRepository: new IllnessRepository(),
  medicineRepository: new MedicineRepository(),
	symptomRepository: new SymptomRepository(),
	recommendationRepository: new RecommendationRepository(),
	illnessReviewRepository: new IllnessReviewRepository(),
});

export {
  repository,
  IRepository,
  UserRepository,
  IllnessRepository,
  MedicineRepository,
	SymptomRepository,
	RecommendationRepository,
	IllnessReviewRepository,
};
