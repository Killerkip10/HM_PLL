import { debounce } from 'lodash';

import { http } from 'utils';
import { PATH } from 'configs';
import { ISymptom } from 'models';

import { FORM_FIELDS, ERROR } from './constants';

export const checkNameRequest = (name, resolve, reject) => http
	.get<ISymptom[]>(PATH.SYMPTOM, { name })
	.then((data) => {
		if (data.length) {
			reject({ [FORM_FIELDS.NAME]: ERROR.NAME_UNIQ });
		}

		resolve();
	});

const deboucedRequest = debounce(checkNameRequest, 300);

export const asyncValidate = (value, _, props) => new Promise((resolve, reject) => {
	if (props.initialValues[FORM_FIELDS.NAME] === value[FORM_FIELDS.NAME]) {
		resolve();
	} else {
		deboucedRequest(value[FORM_FIELDS.NAME], resolve, reject);
	}
});
