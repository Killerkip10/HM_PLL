import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';

export const Input = memo(({ touched, error, ...props }) => (
  <TextField
    error={touched && error}
    helperText={touched && error}
		{...props}
  />
));
