import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { isAuthorized, isAdmin } from '../../../middlewares';
import { Get, Post } from '../../../../../app/medicine';

export default (
  getUseCase: Get,
  createUseCase: Post,
) => {
  const router = Router();

  router.get('/', isAuthorized, (_, res) => getUseCase
    .all()
    .then(data => res.send(data)),
  );

  router.post('/', isAuthorized, isAdmin, (req, res) => createUseCase
    .create(req.body)
    .then(data => res.send(data))
    .catch(error => res.status(BAD_REQUEST).send(error)),
  );

  router.get('/conflicts', isAuthorized, (_, res) => getUseCase
    .conflicts()
    .then(data => res.send(data)),
  );

	router.get('/illness/:id', isAuthorized, (req, res) => getUseCase
		.byIllnessId(req.params.id)
		.then(data => res.send(data)),
	);

  return router;
};
