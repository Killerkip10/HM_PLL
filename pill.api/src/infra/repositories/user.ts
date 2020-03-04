import { User } from '../models/User';

export class UserRepository {
  public getAll(...args) {
    return User.findAll(...args);
  }

  public getOne(...args) {
    return User.findOne(...args);
  }

  public create(user: User) {
    return User.create(user);
  }

  public remove(...args) {
    return User.destroy(...args);
  }
}

// export const userRepository = () => {
//   const getAll = (...args) =>
//
//   const getOne = (...args) => User.findOne(...args);
//
//   const create = (user: User) => User.create(user);
//
//   // const update = (...args) => User.update(...args);
//
//   const remove = (...args) => User.destroy(...args);
//
//   return {
//     getAll,
//     getOne,
//     create,
//     // update,
//     remove,
//   };
// };
