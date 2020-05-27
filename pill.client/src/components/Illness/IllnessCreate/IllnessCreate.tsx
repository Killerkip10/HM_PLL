import React, { memo } from 'react';

import { IllnessCreateForm } from 'components/common/forms';

export const IllnessCreateComponent = ({ symptoms, medicines, recommendations, onSubmitForm, onCreateIllness }) => (
	<div>
		<IllnessCreateForm
			symptoms={symptoms}
			medicines={medicines}
			recommendations={recommendations}
			onSubmit={onCreateIllness}
		/>
		<button onClick={onSubmitForm}>Create illness</button>
	</div>
);

export const IllnessCreate = memo(IllnessCreateComponent);
