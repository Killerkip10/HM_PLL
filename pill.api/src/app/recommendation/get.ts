import { RecommendationRepository } from '../../infra/repositories';

export class Get {
	constructor(
		private recommendationRepository: RecommendationRepository,
	) { }

	public all() {
		return this.recommendationRepository.getAll();
	}
}
