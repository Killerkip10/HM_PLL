import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { Get } from '../../../../../app/user/get';
import { Create } from '../../../../../app/user/create';

export default (
  getUseCase: Get,
  createUseCase: Create,
) => {
  const router = Router();

  router.get('/', (_, res) => getUseCase
    .all()
    .then(data => res.send(data)),
  );

  router.post('/', (req, res) => {
    console.log(req.body);
    createUseCase
        .create(req.body)
        .then(data => res.send(data))
      .catch(error => res.status(BAD_REQUEST).send(error));
    },
  );

  router.get('/:id', (req, res) => getUseCase
    .byId(Number(req.params.id))
    .then(data => res.send(data)),
  );

  return router;
};