import { Get } from './get';
import { Post } from './post';
import { IllnessRepository } from '../../infra/repositories';

export interface IIllness {
  Get: new (illnessRepository: IllnessRepository) => Get;
  Post: new (illnessRepository: IllnessRepository) => Post;
}

export const illness = {
  Get,
  Post,
};

export {
  Get,
  Post,
};
