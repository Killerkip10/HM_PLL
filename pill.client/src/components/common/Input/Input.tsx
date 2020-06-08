import React, { memo } from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
	input: {
		width: '100%',
		height: '68px',
	}
});

export const InputComponent = memo(({ touched, error, classes, ...props }) => (
  <TextField
		className={classes.input}
    error={touched && error}
    helperText={touched && error}
		{...props}
  />
));

export const Input = compose(
	withStyles(styles),
	memo,
)(InputComponent);
