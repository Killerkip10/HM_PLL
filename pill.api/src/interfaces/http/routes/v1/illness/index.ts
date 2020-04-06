import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
  const {
    methods: { illness: { Get, Post } },
    repository: { illnessRepository },
  }: IContainer = container.cradle;

  const getUseCase = new Get(illnessRepository);
  const createUseCase = new Post(illnessRepository);

  return router(getUseCase, createUseCase);
};