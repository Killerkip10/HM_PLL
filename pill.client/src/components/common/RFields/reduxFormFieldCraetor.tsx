import React from 'react';
import { Field } from 'redux-form';

export const renderField = WrappedComponent => ({ input, ...props }) => (
	<WrappedComponent
		{...input}
		{...props}
	/>
);

export const renderReduxField = WrappedComponent => {
	const field = renderField(WrappedComponent);

	return props => (
		<Field
			component={field}
			{...props}
		/>
	);
};