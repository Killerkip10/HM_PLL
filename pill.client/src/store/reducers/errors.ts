import { CHANGE_CODE, RESET_CODE, Actions } from '../actions';

export interface IErrorsState {
	code: number;
}

const initialState: IErrorsState = {
	code: null,
};

export const errors = (state: IErrorsState = initialState, { type, payload }: Actions): IErrorsState => {
	switch (type) {
		case CHANGE_CODE:
			return {
				...state,
				...payload,
			};
		case RESET_CODE:
			return {
				...state,
				code: initialState.code,
			};
		default:
			return state;
	}
};