import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import { profile, IProfileState } from 'components/Profile';
import { illness, IIllness } from 'components/Illness';
import { symptom, ISymptom } from 'components/Symptom';
import { isProduction } from 'utils';

import { errors, IErrorsState } from './reducers';

export interface IStore {
	illness: IIllness,
	symptom: ISymptom,
	profile: IProfileState,
	errors: IErrorsState,
}

const composeEnhancers = isProduction ? compose : (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers( {
	illness,
	symptom,
	profile,
	errors,
	form,
});

export const store = createStore<IStore, any, any, any>(
	reducers,
	composeEnhancers(applyMiddleware(thunk)),
);
