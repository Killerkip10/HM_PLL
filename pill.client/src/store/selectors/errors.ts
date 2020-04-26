import { createSelector } from 'reselect';

import { IStore } from '../store';

export const getErrors = (state: IStore) => state.errors;

export const getCodeSelector = createSelector(
	getErrors,
	errors => errors.code,
);