import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core';

import { IllnessListFilter } from './IllnessListFilter';
import { IllnessListTable } from './IllnessListTable';

const styles = () => ({
	illnessList: {
		padding: '0 20px',
	}
});

export const IllnessList = withStyles(styles)(({ symptoms, illnesses, onIllnessesFilter, classes }) => {
	const handleIllnessesFilterSubmit = useCallback(({ symptoms }) => onIllnessesFilter(symptoms), [onIllnessesFilter]);

	return (
		<div className={classes.illnessList}>
			<h3>Illness list</h3>
			<IllnessListFilter symptoms={symptoms} onSubmit={handleIllnessesFilterSubmit} />
			<IllnessListTable illnesses={illnesses} />
		</div>
	);
});
