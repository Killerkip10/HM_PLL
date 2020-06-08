import React, { useCallback } from 'react';

import { Toolbar } from 'components/common/Toolbar';
import { Page } from 'components/common/Page';

import { IllnessListFilter } from './IllnessListFilter';
import { IllnessListTable } from './IllnessListTable';

export const IllnessList = ({ symptoms, illnesses, onIllnessesFilter }) => {
	const handleIllnessesFilterSubmit = useCallback(({ symptoms }) => onIllnessesFilter(symptoms), [onIllnessesFilter]);

	return (
		<div>
			<Toolbar>
				<div>Search illness</div>
			</Toolbar>

			<Page>
				<IllnessListFilter symptoms={symptoms} onSubmit={handleIllnessesFilterSubmit} />
			</Page>

			<Page padding={false} marginTop={false}>
				<IllnessListTable illnesses={illnesses} />
			</Page>
		</div>
	);
};
