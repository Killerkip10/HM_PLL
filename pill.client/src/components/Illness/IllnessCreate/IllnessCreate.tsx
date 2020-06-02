import React, { memo } from 'react';

import { IllnessCreateForm } from 'components/common/forms';
import { Button } from 'components/common/Button';

export const IllnessCreateComponent = ({ symptoms, medicines, recommendations, onSubmitForm, onCreateIllness }) => (
	<div>
		<IllnessCreateForm
			symptoms={symptoms}
			medicines={medicines}
			recommendations={recommendations}
			onSubmit={onCreateIllness}
		/>
		<Button onClick={onSubmitForm}>Create illness</Button>
	</div>
);

export const IllnessCreate = memo(IllnessCreateComponent);
