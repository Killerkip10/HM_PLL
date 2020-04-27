import { trim } from 'lodash';

export const requiredValidator = (value: string): string => (
	trim(value)
		? ''
		: 'Should not be empty'
)

export const emailValidator = (value: string) => (
	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
		? ''
		: 'Enter valid email'
);
