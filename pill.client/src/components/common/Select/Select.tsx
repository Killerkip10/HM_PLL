import React, { memo, useMemo } from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = () => ({
	select: {
		width: '100%',
		height: '70px',
	}
});

export const DropdownComponent = memo(({ touched, error, data, label = '', children, classes, ...props }) => {
	const renderOptions = useMemo(() => (
		data && data.map(({ id, name }) => <MenuItem key={id} value={id}>{name}</MenuItem>)
	), [data]);

	return (
    <FormControl className={classes.select} error={touched && error}>
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

export const Dropdown = compose(
	withStyles(styles),
	memo,
)(DropdownComponent);
