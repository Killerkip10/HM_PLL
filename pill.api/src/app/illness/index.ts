import { Get } from './get';
import { Post } from './post';
import { Delete } from './delete';
import { IllnessRepository } from '../../infra/repositories';

export interface IIllness {
  Get: new (illnessRepository: IllnessRepository) => Get;
  Post: new (illnessRepository: IllnessRepository) => Post;
	Delete: new (illnessRepository: IllnessRepository) => Delete;
}

export const illness = {
  Get,
  Post,
	Delete,
};

export {
  Get,
  Post,
	Delete,
};
