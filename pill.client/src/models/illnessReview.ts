interface IIllnessReviewShort {
	review: string;
	descriptionRating: number;
	symptomsRating: number;
	medicinesRating: number;
	recommendationsRating: number;
}

export interface ICreateIllnessReview extends IIllnessReviewShort {
	medicines: ICreateIllnessMedicine[];
}

export interface ICreateIllnessMedicine {
	medicineId: number;
	rating: number;
}

export interface IIllnessReviewMedicine {
	medicineId: number;
	rating: number;
	createdAt: string;
	medicine: {
		name: string;
	};
}

export interface IIllnessReview extends IIllnessReviewShort {
	medicines: IIllnessReviewMedicine;
}
