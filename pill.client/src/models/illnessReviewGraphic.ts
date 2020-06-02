export interface IIllnessReviewGraphicData {
	date: string;
	rating: string;
}

export interface IIllnessReviewGraphicMedicines {
	id: number;
	name: string;
	ratings: IIllnessReviewGraphicData[];
}

export interface IIllnessReviewGraphic {
	name: string;
	reviews: IIllnessReviewGraphicData[];
	medicines: IIllnessReviewGraphicMedicines[];
}

