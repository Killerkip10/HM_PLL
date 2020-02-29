import { Router } from 'express';

export default ({
  getUseCase,
}) => {
  const router = Router();

  router.get('/', (_, res) => getUseCase.getAll().then(data => res.send(data)));

  return router;
};