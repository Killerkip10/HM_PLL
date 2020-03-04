import { User } from '../../infra/models/User';

export default (userRepository) => {
  const create = (user: User) => userRepository.create(user);

  return {
    create,
  };
};