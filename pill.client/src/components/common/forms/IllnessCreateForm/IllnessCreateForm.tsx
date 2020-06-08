import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';

import { RFields } from 'components/common/RFields';
import { Button } from 'components/common/Button';
import { numberNormalizer } from 'utils';

import { FORM_NAME, FORM_FIELDS } from './constants';
import { validate, asyncValidate } from './validators';

const styles = () => ({
	description: {
		marginTop: '20px',
	},
	additional: {
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		'& > div': {
			width: '100%',
		},
		'& > div > div:first-child': {
			marginBottom: '10px',
		},
		'& > div > div:last-child': {
			display: 'flex',
			justifyContent: 'center',
		},
		'& > div:not(:first-child)': {
			marginLeft: '40px',
		},
	}
});

export const IllnessCreateFormComponent = ({ handleSubmit, array, symptoms, medicines, recommendations, classes }) => {
	const handleAddSymptom = useCallback(() => array.push(FORM_FIELDS.SYMPTOMS, ''), [array]);

	const handleAddMedicine = useCallback(() => array.push(FORM_FIELDS.MEDICINES, ''), [array]);

	const handleAddRecommendation = useCallback(() => array.push(FORM_FIELDS.RECOMMENDATIONS, ''), [array]);

	return (
		<form onSubmit={handleSubmit}>
			<RFields.Input
				name={FORM_FIELDS.NAME}
				label="Name"
			/>

			<RFields.TextEditor
				name={FORM_FIELDS.DESCRIPTION}
				className={classes.description}
			/>

			<div className={classes.additional}>
				<div>
					<div>Symptoms</div>

					<RFields.ArraySelect
						name={FORM_FIELDS.SYMPTOMS}
						data={symptoms}
						label="Symptom"
						normalize={numberNormalizer}
					/>

					<div>
						<Button type="button" color="link" onClick={handleAddSymptom}>Add symptom</Button>
					</div>
				</div>

				<div>
					<div>Medicines</div>

					<RFields.ArraySelect
						name={FORM_FIELDS.MEDICINES}
						data={medicines}
						label="Medicine"
						normalize={numberNormalizer}
					/>

					<div>
						<Button type="button" color="link" onClick={handleAddMedicine}>Add medicine</Button>
					</div>
				</div>

				<div>
					<div>Recommendations</div>

					<RFields.ArraySelect
						name={FORM_FIELDS.RECOMMENDATIONS}
						data={recommendations}
						label="Recommendation"
						normalize={numberNormalizer}
					/>

					<div>
						<Button type="button" color="link" onClick={handleAddRecommendation}>Add recommendation</Button>
					</div>
				</div>
			</div>
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

export const IllnessCreateForm = compose(
	formCreator,
	withStyles(styles),
)(IllnessCreateFormComponent);
