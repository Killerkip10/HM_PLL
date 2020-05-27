import { store, changeCodeAction } from 'store';

const commonOptions = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const handleResponse = (response) =>	{
	if (response.status >= 300) {
		return Promise.reject(response.status);
	}

	return response.json()
		.catch(() => ({}));
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

const post = <T>(path: string, body: object): Promise<T> => fetch(path, {
	method: 'POST',
	body: JSON.stringify(body),
	...commonOptions,

})
	.then(handleResponse)
	.catch(handleError);

const put = <T>(path: string, body: object): Promise<T> => fetch(path, {
	method: 'PUT',
	body: JSON.stringify(body),
	...commonOptions,

})
	.then(handleResponse)
	.catch(handleError);

const delete = <T>(path: string, body: object): Promise<T> => fetch(path, {
	method: 'DELETE',
	body: JSON.stringify(body),
	...commonOptions,

})
	.then(handleResponse)
	.catch(handleError);

export const http = {
	get,
	post,
	put,
	delete,
};
