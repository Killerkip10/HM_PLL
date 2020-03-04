import { Get } from './get';
import { Post } from './post';
import { UserRepository } from '../../infra/repositories';

export interface IUser {
  Get: new (userRepository: UserRepository) => Get;
  Post: new (userRepository: UserRepository) => Post;
}

export const user = {
  Get,
  Post,
};

export {
  Get,
  Post,
};
