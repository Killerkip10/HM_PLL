import React, { useCallback, useState } from 'react';
import { reduxForm } from 'redux-form';
import { flowRight } from 'lodash';

import { RFields } from 'components/common/RFields';
import { http, requiredValidator, emailValidator } from 'utils';
import { PATH, ROUTE } from 'configs';

import { FORM_NAME, FORM_FIELDS } from './constants';

export const LoginComponent = ({ handleSubmit, history }) => {
	const [error, setError] = useState('');

	const handleSubmitForm = useCallback((value) => {
		 http.post(PATH.LOGIN, value)
			 .then(() => history.push(ROUTE.ILLNESSES))
			 .catch(() => setError('Wrong email or password'));
	}, []);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
			<RFields.Input
				name={FORM_FIELDS.EMAIL}
				validate={[requiredValidator, emailValidator]}
			/>
			<RFields.Input
				name={FORM_FIELDS.PASSWORD}
				validate={[requiredValidator]}
			/>
			<button type="submit">Login</button>
			{error}
    </form>
  );
};

const formCreator = reduxForm({
	form: FORM_NAME,
	initialValues: {
		[FORM_FIELDS.EMAIL]: '',
		[FORM_FIELDS.PASSWORD]: '',
	},
});

export const Login = flowRight(formCreator)(LoginComponent);
