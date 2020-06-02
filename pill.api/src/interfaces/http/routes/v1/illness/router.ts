import { Router } from 'express';
import { BAD_REQUEST, NOT_FOUND } from 'http-status';

import { isAuthorized, isAdmin } from '../../../middlewares';
import { Get, Post, Delete } from '../../../../../app/illness';

export default (
  getUseCase: Get,
  createUseCase: Post,
	deleteUseCase: Delete,
) => {
  const router = Router();

  router.get('/', isAuthorized, (req, res) => getUseCase
		.all(req.query)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.post('/', isAuthorized, isAdmin, (req, res) => createUseCase
		.create(req.body)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/short', isAuthorized, (req, res) => getUseCase
		.allShort()
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/symptoms', isAuthorized, (req, res) => getUseCase
		.bySymptomIds(req.query.ids)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/:id', isAuthorized, (req, res) => getUseCase
		.byId(Number(req.params.id))
		.then(data => res.send(data))
		// .catch(error => res.status(NOT_FOUND).send(error)),
	);

	router.delete('/:id', isAuthorized, isAdmin, (req, res) => deleteUseCase
		.delete(Number(req.params.id))
		.then(() => res.send())
		.catch(error => res.status(NOT_FOUND).send(error)),
	);

  return router;
};
