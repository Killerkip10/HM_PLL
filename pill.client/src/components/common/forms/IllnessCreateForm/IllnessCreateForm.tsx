import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';

import { RFields } from 'components/common/RFields';

import { FORM_NAME, FORM_FIELDS } from './constants';
import { validate, asyncValidate } from './validators';

export const IllnessCreateFormComponent = ({ handleSubmit, array, symptoms, medicines, recommendations }) => {
	const handleAddSymptom = useCallback(() => array.push(FORM_FIELDS.SYMPTOMS, ''), [array]);

	const handleAddMedicine = useCallback(() => array.push(FORM_FIELDS.MEDICINES, ''), [array]);

	const handleAddRecommendation = useCallback(() => array.push(FORM_FIELDS.RECOMMENDATIONS, ''), [array]);

	return (
		<form onSubmit={handleSubmit}>
			<h3>Name</h3>

			<RFields.Input
				name={FORM_FIELDS.NAME}
				placeholder="Name"
			/>

			<h3>Description</h3>

			<RFields.TextEditor
				name={FORM_FIELDS.DESCRIPTION}
			/>

			<h3>Symptoms</h3>

			<RFields.ArraySelect
				name={FORM_FIELDS.SYMPTOMS}
				data={symptoms}
			/>

			<button type="button" onClick={handleAddSymptom}>Add symptom</button>

			<h3>Medicines</h3>

			<RFields.ArraySelect
				name={FORM_FIELDS.MEDICINES}
				data={medicines}
			/>

			<button type="button" onClick={handleAddMedicine}>Add medicine</button>

			<h3>Recommendations</h3>

			<RFields.ArraySelect
				name={FORM_FIELDS.RECOMMENDATIONS}
				data={recommendations}
			/>

			<button type="button" onClick={handleAddRecommendation}>Add recommendation</button>
		</form>
	);
};

const formCreator = reduxForm({
  form: FORM_NAME,
	validate,
	asyncValidate,
	asyncChangeFields: [FORM_FIELDS.NAME],
	enableReinitialize: true,
	destroyOnUnmount: false,
	initialValues: {
  	[FORM_FIELDS.NAME]: '',
		[FORM_FIELDS.DESCRIPTION]: '',
		[FORM_FIELDS.SYMPTOMS]: [''],
		[FORM_FIELDS.MEDICINES]: [''],
		[FORM_FIELDS.RECOMMENDATIONS]: [''],
	}
});

export const IllnessCreateForm = formCreator(IllnessCreateFormComponent);
