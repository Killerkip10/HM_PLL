import { userRepository } from './user';

export const repository = () => ({
  userRepository: userRepository(),
});