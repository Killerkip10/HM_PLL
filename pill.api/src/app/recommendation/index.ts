import { Get } from './get';
import { RecommendationRepository } from '../../infra/repositories';

export interface IRecommendation {
	Get: new (recommendationRepository: RecommendationRepository) => Get,
}

export const recommendation ={
	Get,
};

export {
	Get,
};
