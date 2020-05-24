import React, { memo, useCallback } from 'react';
import { Field, FieldArray } from 'redux-form';

export const renderField = WrappedComponent => ({ meta: { touched, error }, input, ...props }) => (
	<WrappedComponent
		touched={touched}
		error={error}
		{...input}
		{...props}
	/>
);

export const renderReduxField = WrappedComponent => {
	const field = renderField(WrappedComponent);

	return memo(props => (
		<Field
			component={field}
			{...props}
		/>
	));
};

export const ArrayField = WrappedComponent => ({ fields, data }) => {
	const handleRemove = useCallback(index => fields.remove(index), [fields]);

	return (
		<>
			{fields.map((name, index) =>
				<WrappedComponent key={index} name={name} index={index} data={data} onRemove={handleRemove} />
			)}
		</>
	);
};

export const ArrayReduxField = WrappedComponent => memo(({ component, name, data }) => {
	const field = ArrayField(WrappedComponent || component);

	return (
		<FieldArray component={field} name={name} data={data} />
	);
});
