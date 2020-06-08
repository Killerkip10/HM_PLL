import React, { memo } from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';

import { IllnessCreateForm } from 'components/common/forms';
import { Button } from 'components/common/Button';
import { Toolbar } from 'components/common/Toolbar';
import { Page } from 'components/common/Page';

const styles = () => ({
	createButton: {
		marginTop: '20px',
	}
});

export const IllnessCreateComponent = ({ symptoms, medicines, recommendations, onSubmitForm, onCreateIllness, classes }) => (
	<div>
		<Toolbar>
			<div>Create illness</div>
		</Toolbar>

		<Page>
			<IllnessCreateForm
				symptoms={symptoms}
				medicines={medicines}
				recommendations={recommendations}
				onSubmit={onCreateIllness}
			/>
			<Button className={classes.createButton} onClick={onSubmitForm}>Create</Button>
		</Page>
	</div>
);

export const IllnessCreate = compose(
	withStyles(styles),
	memo,
)(IllnessCreateComponent);
