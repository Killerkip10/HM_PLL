import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { Get, Post } from '../../../../../app/user';

export default (
	getUseCase: Get,
	createUseCase: Post,
) => {
	const router = Router();

	router.post('/login', (req, res) => getUseCase
		.byCredentials(req.body.email, req.body.password)
		.then((data) => {
			if (data) {
				req.session.profile = data;
				res.send();
			} else {
				res.status(BAD_REQUEST).send();
			}
		}),
	);

	// router.post('/registration', (req, res) => createUseCase
	// 	.create(req.body)
	// 	.then(data => res.send(data))
	// 	.catch(error => res.status(BAD_REQUEST).send(error)),
	// );

	return router;
};
