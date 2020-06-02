export const FORM_NAME = 'illnessReviewCreate';
export const FORM_FIELDS = {
	REVIEW: 'review',
	DESCRIPTION_RATING: 'descriptionRating',
	SYMPTOMS_RATING: 'symptomsRating',
	RECOMMENDATIONS_RATING: 'recommendationsRating',
	MEDICINES: 'medicines',
	MEDICINE_RATING: 'rating',
	MEDICINE_ID: 'medicineId',
};
export const initialValues = {
	[FORM_FIELDS.REVIEW]: '',
	[FORM_FIELDS.DESCRIPTION_RATING]: 3,
	[FORM_FIELDS.SYMPTOMS_RATING]: 3,
	[FORM_FIELDS.RECOMMENDATIONS_RATING]: 3,
	[FORM_FIELDS.MEDICINES]: [],
};
