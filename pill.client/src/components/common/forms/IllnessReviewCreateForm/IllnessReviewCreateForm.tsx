import React from 'react';
import { reduxForm } from 'redux-form';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import { RFields } from 'components/common/RFields';
import { requiredValidator, numberNormalizer } from 'utils';

import { FORM_NAME, FORM_FIELDS, initialValues } from './constants';
import {Button} from "../../Button";

const styles = () => ({
	form: {
		display: 'flex',
		alignItems: 'flex-start',
	},
	review: {
		width: '100%',
		marginRight: '20px',
		'& textarea': {
			width: '100%',
			resize: 'vertical',
			boxShadow: '0 1px 3px 0 rgba(51,51,51,0.2)',
		}
	},
	submitButton: {
		marginTop: '20px',
	},
	rating: {
		width: '500px',
		backgroundColor: 'white',
		boxShadow: '0 1px 3px 0 rgba(51,51,51,0.2)',
	},
	ratingTitle: {
		backgroundColor: '#ebecf0',
		'& > h4': {
			margin: '0',
			padding: '18px 12px',
		},
	},
	ratingContent: {
		padding: '12px',
	},
	ratingSection: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
});

export const MedicineReviewComponent = ({ name, index, data, onRemove, classes, ...props }) => (
	<div className={classes.ratingSection}>
		<div>{data[index].name}</div>
		<RFields.Rating
			name={`${name}.${FORM_FIELDS.MEDICINE_RATING}`}
			{...props}
		/>
	</div>
);

export const MedicineReview = withStyles(styles)(MedicineReviewComponent);

export const IllnessReviewCreateFormComponent = ({ handleSubmit, medicines, classes }) => (
	<form className={classes.form}>
		<div className={classes.review}>
			<RFields.Textarea
				name={FORM_FIELDS.REVIEW}
				validate={[requiredValidator]}
			/>

			<Button className={classes.submitButton} type="button" onClick={handleSubmit}>Submit</Button>
		</div>

		<div className={classes.rating}>
			<div className={classes.ratingTitle}>
				<h4>Please rate each section</h4>
			</div>

			<div className={classes.ratingContent}>
				<div className={classes.ratingSection}>
					<div>Description</div>
					<RFields.Rating
						name={FORM_FIELDS.DESCRIPTION_RATING}
						normalize={numberNormalizer}
					/>
				</div>

				<div className={classes.ratingSection}>
					<div>Symptoms</div>
					<RFields.Rating
						name={FORM_FIELDS.SYMPTOMS_RATING}
						normalize={numberNormalizer}
					/>
				</div>

				<div className={classes.ratingSection}>
					<div>Recommendations</div>
					<RFields.Rating
						name={FORM_FIELDS.RECOMMENDATIONS_RATING}
						normalize={numberNormalizer}
					/>
				</div>

				<div>
					<Divider />
					<h4>Medicines</h4>
					<RFields.Array
						name={FORM_FIELDS.MEDICINES}
						component={MedicineReview}
						data={medicines}
						normalize={numberNormalizer}
					/>
				</div>
			</div>
		</div>
	</form>
);

const formCreator = reduxForm({
	form: FORM_NAME,
	enableReinitialize: true,
	destroyOnUnmount: false,
	initialValues,
});

export const IllnessReviewCreateForm = flowRight(
	formCreator,
	withStyles(styles),
)(IllnessReviewCreateFormComponent);
