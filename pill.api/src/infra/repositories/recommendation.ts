import { DATE_ATTRIBUTES_EXCLUDE } from './constants';
import { Recommendation } from '../models/Recommendation';

export class RecommendationRepository {
	public getAll() {
		return Recommendation.findAll({
			attributes: { exclude: DATE_ATTRIBUTES_EXCLUDE },
		});
	}
}
