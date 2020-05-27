import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';

import { RFields } from 'components/common/RFields';

import { validate } from './validators';
import { FORM_NAME, FORM_FIELDS } from './constants';

export const IllnessListFilterComponent = ({ handleSubmit, array, symptoms, error, submitFailed }) => {
	const handleAddSymptom = useCallback(() => array.push(FORM_FIELDS.SYMPTOMS, ''), [array]);
	
	return (
		<form onSubmit={handleSubmit}>
			<RFields.ArraySelect
				name={FORM_FIELDS.SYMPTOMS}
				data={symptoms}
			/>

			<button type="button" onClick={handleAddSymptom}>Add symptom</button>
			<div>{submitFailed && error}</div>
			<button type="submit">Submit</button>
		</form>
	);
};

const formCreator = reduxForm({
	form: FORM_NAME,
	validate,
	initialValues: {
		[FORM_FIELDS.SYMPTOMS]: [''],
	},
});

export const IllnessListFilter = formCreator(IllnessListFilterComponent);
