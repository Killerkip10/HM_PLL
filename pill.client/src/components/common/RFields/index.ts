import { renderReduxField, ArrayReduxField } from './reduxFormFieldCraetor';
import { withRemoveIcon } from '../withCancel';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextEditor } from '../TextEditor';

export const RFields = {
	Input: renderReduxField(Input),
	Select: renderReduxField(Select),
	TextEditor: renderReduxField(TextEditor),
	ArraySelect: ArrayReduxField(renderReduxField(withRemoveIcon(Select))),
	Array: ArrayReduxField(),
};
