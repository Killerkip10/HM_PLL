import { UserRepository } from './user';

export interface IRepository {
  userRepository: UserRepository;
}

export const repository = () => ({
  userRepository: new UserRepository(),
});

export {
  UserRepository,
};