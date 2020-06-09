import React, { memo } from 'react';

import { IllnessCreateForm } from 'components/common/forms';
import { Toolbar } from 'components/common/Toolbar';
import { Button } from 'components/common/Button';
import { Page } from 'components/common/Page';

export const IllnessEditComponent = ({ illness, symptoms, medicines, recommendations }) => (
	<div>
		<Toolbar>
			<div>Edit illness</div>
		</Toolbar>

		<Page>
			<IllnessCreateForm
				initialValues={illness}
				symptoms={symptoms}
				medicines={medicines}
				recommendations={recommendations}
			/>

			<Button>Save</Button>
		</Page>
	</div>
);

export const IllnessEdit = memo(IllnessEditComponent);
