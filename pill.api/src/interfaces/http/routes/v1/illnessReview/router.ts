import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { isAuthorized, isAdmin } from '../../../middlewares';
import { Get, Post } from '../../../../../app/illnessReview';

export default (
	getUseCase: Get,
	createUseCase: Post,
) => {
	const router = Router();

	router.get('/', isAuthorized, isAdmin, (req, res) => getUseCase
		.all(req.body)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.post('/', isAuthorized, (req, res) => createUseCase
		.create(req.body)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/:id', isAuthorized, isAdmin, (req, res) => getUseCase
		.allByIllnessId(Number(req.params.id))
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/graphic/:id', isAuthorized, isAdmin, (req, res) => getUseCase
		.graphicById(Number(req.params.id))
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	return router;
};
