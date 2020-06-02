import { IIllnessReview, IllnessReview} from '../../domain';
import { IllnessReviewRepository } from '../../infra/repositories';

export class Get {
	constructor(
		private illnessReviewRepository: IllnessReviewRepository,
	) { }

	public all(query: object) {
		return this.illnessReviewRepository.getAll(query);
	}

	public allByIllnessId(illnessId: number) {
		return this.illnessReviewRepository.getAllByIllnessId(illnessId);
	}

	public graphicById(id: number) {
		return this.illnessReviewRepository.getGraphicById(id);
	}
}
