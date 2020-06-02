import React, { memo } from 'react';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';

const styles = () => ({
	textarea_error: {
		borderColor: '#fa3242',
	},
});

export const TextareaComponent = memo(({ touched, error, classes, ...props }) => (
	<textarea className={touched && error ? classes.textarea_error : ''} cols="30" rows="10" {...props} />
));

export const Textarea = flowRight(
	withStyles(styles),
	memo,
)(TextareaComponent);
