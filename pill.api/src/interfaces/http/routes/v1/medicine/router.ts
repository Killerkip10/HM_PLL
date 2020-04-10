import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { Get, Post } from '../../../../../app/medicine';

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

  return router;
};
