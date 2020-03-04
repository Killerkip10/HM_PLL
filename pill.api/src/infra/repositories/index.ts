import { UserRepository } from './user';

interface IRepository {
  userRepository: UserRepository;
}

const repository = () => ({
  userRepository: new UserRepository(),
});

export {
  repository,
  IRepository,
  UserRepository,
};
