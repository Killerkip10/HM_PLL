import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { isAuthorized } from '../../../middlewares';
import { Get, Post, Put, Delete } from '../../../../../app/symptom';

export default (getUseCase: Get, createUseCase: Post, updateUseCase: Put, deleteUseCase: Delete) => {
	const router = Router();

	router.get('/', isAuthorized, (req, res) => getUseCase
		.all(req.query)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.post('/', isAuthorized, (req, res) => createUseCase
		.create(req.body)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.put('/', isAuthorized, (req, res) => updateUseCase
		.update(req.body)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/short', isAuthorized, (_, res) => getUseCase
		.allShort()
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.delete('/:id', isAuthorized, (req, res) => deleteUseCase
		.byId(Number(req.params.id))
		.then(() => res.send())
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	return router;
};
