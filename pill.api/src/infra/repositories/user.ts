import { User } from '../models/User';

export const userRepository = () => {
  const getAll = (...args) => User.findAll(...args);

  const getOne = (...args) => User.findOne(...args);

  const create = (user: User) => User.create(user);

  // const update = (...args) => User.update(...args);

  const remove = (...args) => User.destroy(...args);

  return {
    getAll,
    getOne,
    create,
    // update,
    remove,
  };
};
