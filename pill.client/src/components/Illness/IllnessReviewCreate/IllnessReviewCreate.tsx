import React, { memo } from 'react';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';

import { IllnessReviewCreateForm } from 'components/common/forms';

const styles = () => ({
	review: {
		padding: '0 20px',
	},
});

export const IllnessReviewCreateComponent = ({ illnessReview, medicines, classes, onReviewCreate, onReviewFormSubmit }) => (
	<div className={classes.review}>
		<h3>Illness review</h3>
		<IllnessReviewCreateForm initialValues={illnessReview} medicines={medicines} onSubmit={onReviewCreate} />
	</div>
);

export const IllnessReviewCreate = flowRight(
	withStyles(styles),
	memo,
)(IllnessReviewCreateComponent);
