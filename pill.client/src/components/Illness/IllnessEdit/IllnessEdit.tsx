import React, { memo } from 'react';

import { IllnessCreateForm } from 'components/common/forms';
import { Toolbar } from 'components/common/Toolbar';
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
		</Page>
	</div>
);

export const IllnessEdit = memo(IllnessEditComponent);
