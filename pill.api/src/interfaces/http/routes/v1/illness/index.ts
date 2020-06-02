import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
  const {
    methods: { illness: { Get, Post, Delete } },
    repository: { illnessRepository },
  }: IContainer = container.cradle;

  const getUseCase = new Get(illnessRepository);
  const createUseCase = new Post(illnessRepository);
  const deleteUseCase = new Delete(illnessRepository);

  return router(getUseCase, createUseCase, deleteUseCase);
};
