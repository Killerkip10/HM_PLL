import React, { useCallback, useState } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';

import { Page } from 'components/common/Page';
import { RFields } from 'components/common/RFields';
import { Button } from 'components/common/Button';
import { http, requiredValidator, emailValidator } from 'utils';
import { PATH, ROUTE } from 'configs';

import { FORM_NAME, FORM_FIELDS } from './constants';

const styles = () => ({
	form: {
		maxWidth: '500px',
	},
	action: {
		marginTop: '5px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	error: {
		fontSize: '12px',
		height: '12px',
		color: '#f44336',
	}
});

export const LoginComponent = ({ handleSubmit, history, classes }) => {
	const [error, setError] = useState('');

	const handleSubmitForm = useCallback((value) => {
		 http.post(PATH.LOGIN, value)
			 .then(() => history.push(ROUTE.ILLNESS))
			 .catch(() => setError('Wrong email or password'));
	}, []);

  return (
  	<Page className={classes.form}>
			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<RFields.Input
					name={FORM_FIELDS.EMAIL}
					label="Email"
					validate={[requiredValidator, emailValidator]}
				/>
				<RFields.Input
					name={FORM_FIELDS.PASSWORD}
					label="Password"
					type="password"
					validate={[requiredValidator]}
				/>

				<div className={classes.action}>
					<Button type="submit">Login</Button>
					<div className={classes.error}>{error}</div>
				</div>
			</form>
		</Page>
  );
};

const formCreator = reduxForm({
	form: FORM_NAME,
	initialValues: {
		[FORM_FIELDS.EMAIL]: '',
		[FORM_FIELDS.PASSWORD]: '',
	},
});

export const Login = compose(
	withStyles(styles),
	formCreator,
)(LoginComponent);
