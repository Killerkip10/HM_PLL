import { MedicineConflict } from '../models/MedicineConflict';
import { MedicineGroup } from '../models/MedicineGroup';
import { MedicineGroupConflict } from '../models/MedicineGroupConflict';
import { IllnessReview } from '../models/IllnessReview';
import { IllnessReviewMedicine } from '../models/IllnessReviewMedicine';
import { IConflict } from '../interfaces';

export const getDate = (date: Date) => date.toISOString().split('T')[0];

export const getMedicineConflicts = (medicineConflicts: MedicineConflict[]) => medicineConflicts.reduce((prev, curr) => {
  const conflict = prev.find(c => c.id === curr.medicineId);

  if (conflict) {
    conflict.conflicts.push(curr.conflictMedicineId);

    return prev;
  }

  const existConflict = prev.find(c => c.id === curr.conflictMedicineId);

  if (!(existConflict && existConflict.conflicts.includes(curr.medicineId))) {
    prev.push({ id: curr.medicineId, conflicts: [curr.conflictMedicineId] });
  }

  return prev;
}, [] as IConflict[]);

export const getGroupConflicts = (
  medicineGroups: MedicineGroup[],
  medicineGroupConflicts: MedicineGroupConflict[],
  medicineConflicts: IConflict[],
) => medicineGroupConflicts.reduce((prev, curr) => {
  const conflicts = medicineGroups
    .filter(g => g.groupId === curr.groupId)
    .map(g => g.medicineId)
    .filter((medicineId) => {
      const existMedicineConflict = medicineConflicts.find(c => c.id === curr.medicineId);

      if (existMedicineConflict && existMedicineConflict.conflicts.some(id => id === medicineId)) {
        return false;
      }

      const existConflict = prev.find(c => c.id === medicineId);

      if (existConflict) {
        return !existConflict.conflicts.some(id => id === curr.medicineId);
      } else {
        return true;
      }
    });

  if (conflicts.length) {
    prev.push({ id: curr.medicineId, conflicts });
  }

  return prev;
}, [] as IConflict[]);

export const averageMedicinesRating = (medicines: IllnessReviewMedicine[]): number => medicines.reduce((prev, curr) => prev + curr.rating, 0) / medicines.length || 0;

export const getAverageIllnessRating = (illnessesReview: IllnessReview[]) => {
	const illnesses = illnessesReview
		.reduce((prev, { createdAt, descriptionRating, symptomsRating, recommendationsRating, medicines }) => {
			const reviewDate = getDate(createdAt);
			const rating = (descriptionRating + symptomsRating + recommendationsRating + averageMedicinesRating(medicines)) / 4;
			const existReview = prev.find(r => r.date === reviewDate);

			if (existReview) {
				existReview.rating += rating;
				existReview.amount++;
				return prev;
			} else {
				return [
					...prev,
					{ date: reviewDate, rating, amount: 1 },
				];
			}
		}, []);

		let allRatings = 0;
		let allAmount = 0;

		const sortedIllnesses = illnesses.sort((a, b) => a.date >= b.date ? 1 : -1);

		for(let i = 0; i < sortedIllnesses.length; i++) {
			allRatings += sortedIllnesses[i].rating;
			allAmount += sortedIllnesses[i].amount;

			sortedIllnesses[i].rating = allRatings / allAmount;
		}

		return sortedIllnesses.map(({ date, rating }) => ({ date, rating }));
}

export const getAverageMedicinesRating = (medicines: IllnessReviewMedicine[]) => medicines
	.reduce((prev, { medicineId, createdAt, rating, medicine: { name } }) => {
		const reviewDate = getDate(createdAt);
		const existMedicine = prev.find(m => m.id === medicineId);

		if (existMedicine) {
			const existMedicineDate = existMedicine.ratings.find(r => r.date === reviewDate);

			if (existMedicineDate) {
				existMedicineDate.rating += rating;
				existMedicineDate.amount++;

				return prev;
			} else {
				existMedicine.ratings.push({ date: reviewDate, rating, amount: 1 });

				return prev;
			}
		} else {
			return [
				...prev,
				{ id: medicineId, name, ratings: [{ date: reviewDate, rating, amount: 1 }] },
			];
		}
	}, [])
	.map(({ id, name, ratings }) => {
		let allRatings = 0;
		let allAmount = 0;

		const sortedRatings = ratings.sort((a, b) => a.date >= b.date ? 1 : -1);

		for(let i = 0; i < sortedRatings.length; i++) {
			allRatings += sortedRatings[i].rating;
			allAmount += sortedRatings[i].amount;

			sortedRatings[i].rating = allRatings / allAmount;
		}

		return {
			id,
			name,
			ratings: sortedRatings.map(({ date, rating }) => ({ date, rating })),
		};
	});

export const getAverageRating = (illnessesReview: IllnessReview[]) => {
	const ratings = getAverageIllnessRating(illnessesReview);

	return ratings.reduce((prev, curr) => prev + curr.rating, 0) / ratings.length;
};
