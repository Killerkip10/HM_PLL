import React, { memo } from 'react';

import { IllnessCreateForm } from 'components/common/forms';

export const IllnessCreateComponent = ({ symptoms, medicines, recommendations }) => (
	<IllnessCreateForm symptoms={symptoms} medicines={medicines} recommendations={recommendations} />
);

export const IllnessCreate = memo(IllnessCreateComponent);
