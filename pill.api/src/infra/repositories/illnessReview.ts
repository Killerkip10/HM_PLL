import { IllnessReview } from '../models/IllnessReview';
import { IllnessReviewMedicine } from '../models/IllnessReviewMedicine';
import { Illness } from '../models/Illness';
import { Medicine } from '../models/Medicine';

import { getAverageIllnessRating, getAverageMedicinesRating } from '../utils';
import { IIllnessReview } from '../../domain';

export class IllnessReviewRepository {
	public getAll(query: object) {
		return IllnessReview.findAll({ where: query });
	}

	public getAllByIllnessId(illnessId: number) {
		return IllnessReview.findAll({
			where: { illnessId },
			include: {
				model: IllnessReviewMedicine,
				include: {
					model: Medicine,
					attributes: ['name'],
				},
			},
		});
	}

	public async getGraphicById(id: number) {
		const illnessReview = await Illness.findOne({
			where: { id },
			attributes: ['id', 'name'],
			include: {
				model: IllnessReview,
				include: {
					model: IllnessReviewMedicine,
					include: {
						model: Medicine,
						attributes: ['name'],
					},
				},
			},
		});

		const allMedicines = illnessReview.reviews.reduce((prev, { medicines }) => [...prev, ...medicines], []);

		const reviews = getAverageIllnessRating(illnessReview.reviews);
		const medicines = getAverageMedicinesRating(allMedicines);

		return {
			name: illnessReview.name,
			reviews,
			medicines,
		};
	}

	public async create(illnessReview: IIllnessReview) {
		const { id: illnessReviewId } = await IllnessReview.create(illnessReview);

		await IllnessReviewMedicine.bulkCreate(illnessReview.medicines.map(m => ({ ...m, illnessReviewId })));
	}
}
