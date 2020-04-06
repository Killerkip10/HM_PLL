import { UserRepository } from './user';
import { IllnessRepository } from './illness';

interface IRepository {
  userRepository: UserRepository;
  illnessRepository: IllnessRepository;
}

const repository = () => ({
  userRepository: new UserRepository(),
  illnessRepository: new IllnessRepository(),
});

export {
  repository,
  IRepository,
  UserRepository,
  IllnessRepository,
};
