import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { profile, IProfileState } from 'components/Profile';
import { isProduction } from 'utils';

import { errors, IErrorsState } from './reducers';

export interface IStore {
	profile: IProfileState,
	errors: IErrorsState,
}

const composeEnhancers = isProduction ? compose : (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers( {
	profile,
	errors,
});

export const store = createStore<IStore, any, any, any>(
	reducers,
	composeEnhancers(applyMiddleware(thunk)),
);