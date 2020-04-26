import { store, changeCodeAction } from 'store';

const handleResponse = (response) =>	{
	if (response.status >= 300) {
		return Promise.reject(response.status);
	}

	return Promise.resolve(response);
};

const handleError = (status: number) => {
	store.dispatch(changeCodeAction(status));

	return Promise.reject(status);
};

const get = <T>(path: string, params: { [key: string]: string | number } = {}): Promise<T> => {
	const queryParams = Object.entries(params)
		.map(([k, v]) => `${k}=${v}`)
		.join('&');

	return fetch(`${path}?${queryParams}`)
		.then(handleResponse)
		.catch(handleError);
};

const post = (path: string, body: object) => fetch(path, {
	method: 'POST',
	body: JSON.stringify(body),
});

export const http = {
	get,
	post,
};