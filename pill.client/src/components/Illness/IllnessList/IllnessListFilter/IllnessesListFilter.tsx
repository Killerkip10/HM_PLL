import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core';

import { RFields } from 'components/common/RFields';
import { Button } from 'components/common/Button';

import { validate } from './validators';
import { FORM_NAME, FORM_FIELDS } from './constants';

const styles = () => ({
	filters: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > div': {
			width: '33%',
		}
	},
	submitButton: {
		marginRight: '10px',
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	error: {
		color: '#f44336',
	}
});

export const IllnessListFilterComponent = ({ handleSubmit, array, symptoms, error, submitFailed, classes }) => {
	const handleAddSymptom = useCallback(() => array.push(FORM_FIELDS.SYMPTOMS, ''), [array]);
	
	return (
		<form onSubmit={handleSubmit}>
			<RFields.ArraySelect
				name={FORM_FIELDS.SYMPTOMS}
				data={symptoms}
				className={classes.filters}
				label="Symptom"
			/>

			<div className={classes.actions}>
				<div>
					<Button className={classes.submitButton} type="submit">Search</Button>
					<Button color="secondary" type="button" onClick={handleAddSymptom}>Add symptom</Button>
				</div>

				<div className={classes.error}>{submitFailed && error}</div>
			</div>
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

export const IllnessListFilter = withStyles(styles)(formCreator(IllnessListFilterComponent));
