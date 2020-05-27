import { debounce } from 'lodash';

import { http } from 'utils';
import { PATH } from 'configs';
import { IIllnessShort } from 'models';
import { requiredValidator } from 'utils';

import { FORM_FIELDS, ERROR } from './constants';

export const arrayValidator = (symptomsIds: string[] = [], message: string) => ({
	_error: symptomsIds.length ? '' : message,
	...symptomsIds.map(requiredValidator),
});

export const validate = value => ({
	[FORM_FIELDS.NAME]: requiredValidator(value[FORM_FIELDS.NAME]),
	[FORM_FIELDS.DESCRIPTION]: requiredValidator(value[FORM_FIELDS.DESCRIPTION]),
	[FORM_FIELDS.SYMPTOMS]: arrayValidator(value[FORM_FIELDS.SYMPTOMS], ERROR.SYMPTOMS),
	[FORM_FIELDS.MEDICINES]: arrayValidator(value[FORM_FIELDS.MEDICINES], ERROR.MEDICINES),
	[FORM_FIELDS.RECOMMENDATIONS]: arrayValidator(value[FORM_FIELDS.RECOMMENDATIONS], ERROR.RECOMMENDATIONS),
});

export const checkNameRequest = (name, resolve, reject) => http
	.get<IIllnessShort[]>(PATH.ILLNESS, { name })
	.then((data) => {
		if (data.length) {
			reject({ [FORM_FIELDS.NAME]: ERROR.NAME_UNIQ });
		}

		resolve();
	});

const deboucedRequest = debounce(checkNameRequest, 300);

export const asyncValidate = value => new Promise((resolve, reject) => (
	deboucedRequest(value[FORM_FIELDS.NAME], resolve, reject)
));
