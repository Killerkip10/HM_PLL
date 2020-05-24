import { renderReduxField, ArrayReduxField } from './reduxFormFieldCraetor';
import { withRemoveIcon } from '../withCancel';
import { Input } from '../Input';
import { Select } from '../Select';

export const RFields = {
	Input: renderReduxField(Input),
	Select: renderReduxField(Select),
	ArraySelect: ArrayReduxField(renderReduxField(withRemoveIcon(Select))),
	Array: ArrayReduxField(),
};
