import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { Get, Post } from '../../../../../app/user';

export default (
  getUseCase: Get,
  createUseCase: Post,
) => {
  const router = Router();

  router.get('/', (_, res) => getUseCase
    .all()
    .then(data => res.send(data)),
  );

  router.post('/', (req, res) => createUseCase
    .create(req.body)
    .then(data => res.send(data))
    .catch(error => res.status(BAD_REQUEST).send(error)),
  );

  router.get('/:id', (req, res) => getUseCase
    .byId(Number(req.params.id))
    .then(data => res.send(data)),
  );

  return router;
};
