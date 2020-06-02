import { PathReporter } from 'io-ts/lib/PathReporter';
import { isLeft } from 'fp-ts/lib/Either';

import { IIllnessReview, IllnessReview} from '../../domain';
import { IllnessReviewRepository } from '../../infra/repositories';

export class Post {
	constructor(
		private illnessReviewRepository: IllnessReviewRepository,
	) { }

	public create(illnessReview: IIllnessReview) {
		const entity = IllnessReview.decode(illnessReview);

		if (isLeft(entity)) {
			return Promise.reject(PathReporter.report(entity));
		}

		return this.illnessReviewRepository.create(illnessReview);
	}
}
