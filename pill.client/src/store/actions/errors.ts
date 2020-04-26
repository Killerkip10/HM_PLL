export const CHANGE_CODE = '[ERRORS]: change code';

export const changeCodeAction = (code: number) => ({
	type: CHANGE_CODE,
	payload: { code },
});

export type Actions = ReturnType<typeof changeCodeAction>;
