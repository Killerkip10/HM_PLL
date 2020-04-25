import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { IProfileState, profile } from 'components/Profile';

export interface IStore {
	profile: IProfileState,
}

const reducers = combineReducers( {
	profile,
});

export const store = createStore<IStore, any, any, any>(
	reducers,
	applyMiddleware(thunk),
);