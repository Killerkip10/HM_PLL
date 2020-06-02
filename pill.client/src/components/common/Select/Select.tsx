import React, { memo, useMemo } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const Dropdown = memo(({ touched, error, data, label = '', children, ...props }) => {
	const renderOptions = useMemo(() => (
		data && data.map(({ id, name }) => <MenuItem key={id} value={id}>{name}</MenuItem>)
	), [data]);

	return (
    <FormControl error={touched && error}>
			<InputLabel>{label}</InputLabel>
      <Select {...props}>
				{data
					? renderOptions
					: children
				}
      </Select>
      <FormHelperText>{touched && error}</FormHelperText>
    </FormControl>
	);
});
