import { renderReduxField } from './reduxFormFieldCraetor';
import { Input } from '../Input';
import { Select } from '../Select';

export const RFields = {
	Input: renderReduxField(Input),
	Select: renderReduxField(Select),
};