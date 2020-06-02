import { renderReduxField, ArrayReduxField } from './reduxFormFieldCraetor';
import { withRemoveIcon } from '../withCancel';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { Rating } from '../Rating';
import { TextEditor } from '../TextEditor';

export const RFields = {
	Input: renderReduxField(Input),
	Select: renderReduxField(Select),
	Textarea: renderReduxField(Textarea),
	TextEditor: renderReduxField(TextEditor),
	Rating: renderReduxField(Rating),
	ArraySelect: ArrayReduxField(renderReduxField(withRemoveIcon(Select))),
	Array: ArrayReduxField(),
};
