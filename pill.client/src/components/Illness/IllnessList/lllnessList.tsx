import React, { useCallback } from 'react';

import { IllnessListFilter } from './IllnessListFilter';
import { IllnessListTable } from './IllnessListTable';

export const IllnessList = ({ symptoms, illnesses, onIllnessesFilter }) => {
	const handleIllnessesFilterSubmit = useCallback(({ symptoms }) => onIllnessesFilter(symptoms), [onIllnessesFilter]);

	return (
		<div>
			<IllnessListFilter symptoms={symptoms} onSubmit={handleIllnessesFilterSubmit} />
			<IllnessListTable illnesses={illnesses} />
		</div>
	);
};
