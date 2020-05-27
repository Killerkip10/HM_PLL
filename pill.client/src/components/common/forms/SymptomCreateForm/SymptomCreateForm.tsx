import React from 'react';
import { reduxForm, defaultShouldAsyncValidate } from 'redux-form';

import { RFields } from 'components/common/RFields';
import { requiredValidator } from 'utils';

import { FORM_NAME, FORM_FIELDS } from './constants';
import { asyncValidate } from './validators';

export const SymptomCreateFormComponent = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		<RFields.Input
			name={FORM_FIELDS.NAME}
			validate={[requiredValidator]}
		/>
	</form>
);

const formCreator = reduxForm({
	form: FORM_NAME,
	asyncValidate,
	asyncChangeFields: [FORM_FIELDS.NAME],
	enableReinitialize: true,
	destroyOnUnmount: false,
	shouldAsyncValidate: params => defaultShouldAsyncValidate({ ...params, syncValidationPasses: true }),
	initialValues: {
		[FORM_FIELDS.NAME]: '',
	}
});

export const SymptomCreateForm = formCreator(SymptomCreateFormComponent);
