import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
  const {
    methods: { medicine: { Get, Post } },
    repository: { medicineRepository },
  }: IContainer = container.cradle;

  const getUseCase = new Get(medicineRepository);
  const createUseCase = new Post(medicineRepository);

  return router(getUseCase, createUseCase);
};