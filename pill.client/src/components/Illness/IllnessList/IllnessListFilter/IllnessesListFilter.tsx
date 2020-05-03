import React, { useCallback } from 'react';
import { reduxForm, FieldArray } from 'redux-form';

import { RFields } from 'components/common/RFields';

import { FORM_NAME, FORM_FIELDS } from './constants';
import { FilterSymptomsList } from './FilterSymptomsList';

export const IllnessListFilterComponent = ({ handleSubmit, array, symptoms }) => {
	const handleAddSymptom = useCallback(() => array.push(FORM_FIELDS.SYMPTOMS, ''), [array]);

	const handleRemoveSymptom = useCallback((index) => array.remove(FORM_FIELDS.SYMPTOMS, index), [array]);

	return (
		<form onSubmit={handleSubmit}>
			<RFields.Input name={FORM_FIELDS.NAME} />
			<FieldArray
				name={FORM_FIELDS.SYMPTOMS}
				component={FilterSymptomsList}
				symptoms={symptoms}
				onRemoveSymptom={handleRemoveSymptom}
			/>
			<button type="button" onClick={handleAddSymptom}>Add symptom</button>
		</form>
	);
};

const formCreator = reduxForm({
	form: FORM_NAME,
});

export const IllnessListFilter = formCreator(IllnessListFilterComponent);
