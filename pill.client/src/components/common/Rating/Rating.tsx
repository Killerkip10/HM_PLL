import React, { memo } from 'react';
import UIRating from '@material-ui/lab/Rating';

export const Rating = memo(({ touched, error, value, ...props }) => (
	<div>
		<UIRating value={value} {...props} />
		{touched && error}
	</div>
));
