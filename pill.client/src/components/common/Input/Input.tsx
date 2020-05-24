import React, { memo } from 'react';

export const Input = memo(({ touched, error, ...props }) => (
	<div>
		<input {...props} />
		{touched && error}
	</div>
));
