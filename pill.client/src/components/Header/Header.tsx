import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

import { isAllowed } from 'utils';
import { ROUTE, ROLE } from 'configs';
import { getFirstNameSelector, getLastNameSelector, getRoleSelector } from 'components/Profile';

import { MENU_ID } from './constants';

const styles = () => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#3b3a3c',
		height: '56px',
	},
	leftBar: {
		display: 'flex',
		alignItems: 'stretch',
	},
	rightBar: {
		display: 'flex',
		alignItems: 'stretch',
		color: 'white',
	},
	profile: {
		display: 'flex',
		alignItems: 'center',
		'& > :first-child': {
			marginRight: '10px',
		}
	},
	logo: {
		display: 'flex',
		alignItems: 'center',
		color: 'white',
		backgroundColor: '#282728',
		alignSelf: 'stretch',
		padding: '0 24px',
		cursor: 'pointer',
		fontSize: '17px',
		textTransform: 'uppercase',
		'& > :first-child': {
			fontSize: '32px',
			marginRight: '10px',
		},
	},
	headerButton: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 24px',
		color: 'white',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#282728',
		}
	},
});

export const HeaderComponent = ({ history, classes = {}, firstName, lastName, role }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [menuId, setMenuId] = useState(null);

	const handleClick = useCallback((event) => {
		setAnchorEl(event.currentTarget);
		setMenuId(Number(event.currentTarget.dataset.menuId));
	}, [setAnchorEl, setMenuId]);

	const handleClose = useCallback(() => {
		setAnchorEl(null);
		setMenuId(null);
	}, [setAnchorEl, setMenuId]);

	const handleMenuItemClick = useCallback((event) => {
		history.push(event.currentTarget.dataset.route);
		handleClose();
	}, [history, handleClose]);

	return (
		<div className={classes.header}>
			<div className={classes.leftBar}>
				<div className={classes.logo}>
					<Icon>healing</Icon>
					<div>Home treatment</div>
				</div>

				{isAllowed(role, [ROLE.USER, ROLE.ADMIN]) &&
					<div className={classes.headerButton} data-route={ROUTE.ILLNESS} onClick={handleMenuItemClick}>Search illnesses</div>
				}

				{isAllowed(role, [ROLE.ADMIN]) &&
					<div className={classes.headerButton} data-menu-id={MENU_ID.SYMPTOM} onClick={handleClick}>Management</div>
				}

				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={menuId === MENU_ID.SYMPTOM}
					onClose={handleClose}
				>
					<MenuItem data-route={ROUTE.ILLNESS_CREATE} onClick={handleMenuItemClick}>Create illness</MenuItem>
					<MenuItem data-route={ROUTE.ILLNESS_MANAGE} onClick={handleMenuItemClick}>Manage illness</MenuItem>
					<MenuItem data-route={ROUTE.SYMPTOM_MANAGE} onClick={handleMenuItemClick}>Manage symptoms</MenuItem>
				</Menu>
			</div>

			<div className={classes.rightBar}>
				{firstName && (
					<div className={`${classes.profile} ${classes.headerButton}`} data-menu-id={MENU_ID.PROFILE} onClick={handleClick}>
						<div>{firstName} {lastName}</div>
						<Icon>account_circle</Icon>
					</div>
				)}

				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={menuId === MENU_ID.PROFILE}
					onClose={handleClose}
				>
					<MenuItem>Profile</MenuItem>
					<MenuItem>Logout</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	firstName: getFirstNameSelector(state),
	lastName: getLastNameSelector(state),
	role: getRoleSelector(state),
});

const connector = connect(mapStateToProps);

export const Header = flowRight(
	connector,
	withRouter,
	withStyles(styles),
)(HeaderComponent);
