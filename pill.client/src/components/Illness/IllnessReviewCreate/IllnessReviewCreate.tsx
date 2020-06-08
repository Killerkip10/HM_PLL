import React, { memo } from 'react';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';

import { Toolbar } from 'components/common/Toolbar';
import { IllnessReviewCreateForm } from 'components/common/forms';

const styles = () => ({
	review: {
		margin: '20px',
	},
});

export const IllnessReviewCreateComponent = ({ illnessReview, medicines, classes, onReviewCreate }) => (
	<div>
		<Toolbar>
			<div>Illness review</div>
		</Toolbar>

		<div className={classes.review}>
			<IllnessReviewCreateForm initialValues={illnessReview} medicines={medicines} onSubmit={onReviewCreate} />
		</div>
	</div>
);

export const IllnessReviewCreate = flowRight(
	withStyles(styles),
	memo,
)(IllnessReviewCreateComponent);
