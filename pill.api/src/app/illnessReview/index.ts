import { Post } from './post';
import { Get } from './get';
import { IllnessReviewRepository } from '../../infra/repositories';

export interface IIllnessReview {
	Get: new (illnessReviewRepository: IllnessReviewRepository) => Get,
	Post: new (illnessReviewRepository: IllnessReviewRepository) => Post,
}

export const illnessReview = {
	Get,
	Post,
};

export {
	Get,
	Post,
};
