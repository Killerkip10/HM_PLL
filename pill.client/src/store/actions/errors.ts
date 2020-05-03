export const CHANGE_CODE = '[ERRORS]: change code';
export const RESET_CODE = '[ERRORS]: reset code';

export const changeCodeAction = (code: number) => ({
	type: CHANGE_CODE,
	payload: { code },
});

export const resetCodeAction = () => ({
	type: RESET_CODE,
});

export type Actions = ReturnType<typeof changeCodeAction>;
