import { Router } from 'express';
import { BAD_REQUEST, NOT_FOUND } from 'http-status';

import { isAuthorized, isAdmin } from '../../../middlewares';
import { Get, Post } from '../../../../../app/illness';

export default (
  getUseCase: Get,
  createUseCase: Post,
) => {
  const router = Router();

  router.get('/', isAuthorized, (req, res) => getUseCase
    .all()
    .then(data => res.send(data)),
  );

	router.get('/symptoms', isAuthorized, (req, res) => getUseCase
		.bySymptomIds(req.query.ids)
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	router.get('/:id', isAuthorized, (req, res) => getUseCase
		.byId(Number(req.params.id))
		.then(data => res.send(data))
		.catch(error => res.status(NOT_FOUND).send(error)),
	);

  router.post('/', isAuthorized, isAdmin, (req, res) => createUseCase
    .create(req.body)
    .then(data => res.send(data))
    .catch(error => res.status(BAD_REQUEST).send(error)),
  );

  return router;
};
