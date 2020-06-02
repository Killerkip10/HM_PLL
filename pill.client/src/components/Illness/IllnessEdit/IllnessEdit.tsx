import React, { memo } from 'react';

import { IllnessCreateForm } from 'components/common/forms';

export const IllnessEditComponent = ({ illness, symptoms, medicines, recommendations }) => (
	<div>
		<IllnessCreateForm
			initialValues={illness}
			symptoms={symptoms}
			medicines={medicines}
			recommendations={recommendations}
		/>
	</div>
);

export const IllnessEdit = memo(IllnessEditComponent);
