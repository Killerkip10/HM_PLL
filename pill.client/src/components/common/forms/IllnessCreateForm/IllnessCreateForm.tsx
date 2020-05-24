import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';

import { RFields } from 'components/common/RFields';
import { TextEditor } from 'components/common/Editor';
import { requiredValidator } from 'utils';

import { FORM_NAME, FORM_FIELDS } from './constants';

export const IllnessCreateFormComponent = ({ handleSubmit, array, symptoms, medicines, recommendations }) => {
	const handleAddSymptom = useCallback(() => array.push(FORM_FIELDS.SYMPTOMS, ''), [array]);

	const handleAddMedicine = useCallback(() => array.push(FORM_FIELDS.MEDICINES, ''), [array]);

	const handleAddRecommendation = useCallback(() => array.push(FORM_FIELDS.RECOMMENDATIONS, ''), [array]);

	return (
		<form onSubmit={handleSubmit}>
			<RFields.Input
				name={FORM_FIELDS.NAME}
				validate={[requiredValidator]}
			/>

			<TextEditor />

			<RFields.Input
				name={FORM_FIELDS.DESCRIPTION}
				validate={[requiredValidator]}
			/>

			<RFields.ArraySelect
				name={FORM_FIELDS.SYMPTOMS}
				data={symptoms}
			/>

			<button type="button" onClick={handleAddSymptom}>Add symptom</button>

			<RFields.ArraySelect
				name={FORM_FIELDS.MEDICINES}
				data={medicines}
			/>

			<button type="button" onClick={handleAddMedicine}>Add medicine</button>

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
	initialValues: {
  	[FORM_FIELDS.NAME]: '',
		[FORM_FIELDS.DESCRIPTION]: '',
		[FORM_FIELDS.SYMPTOMS]: [''],
		[FORM_FIELDS.MEDICINES]: [''],
		[FORM_FIELDS.RECOMMENDATIONS]: [''],
	}
});

export const IllnessCreateForm = formCreator(IllnessCreateFormComponent);
