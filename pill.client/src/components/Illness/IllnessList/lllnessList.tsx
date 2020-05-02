import React from 'react';

import { IllnessListFilter } from './IllnessListFilter';

export const IllnessList = ({ symptoms }) => {
	return (
		<div>
			<IllnessListFilter symptoms={symptoms} />
		</div>
	);
};
