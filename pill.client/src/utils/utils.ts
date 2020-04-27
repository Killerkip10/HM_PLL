import { AUTH_COOKIE } from 'configs/api';

export const getCookie = (name: string) => {
	const matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));

	return matches ? decodeURIComponent(matches[1]) : null;
};

export const deleteCookie = (name: string): void => {
	document.cookie = `${AUTH_COOKIE}=''; max-age=-1`;
};

export const isUserAuthorized = (): boolean => Boolean(getCookie(AUTH_COOKIE));

export const resetUserAuthorization = (): void => deleteCookie(AUTH_COOKIE);
