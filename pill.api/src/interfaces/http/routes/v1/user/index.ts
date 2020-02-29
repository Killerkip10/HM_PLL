import router from './router';
import { instance } from './instance';
import { container } from '../../../../../container';

export default () => {
  const {
    methods: { user: { get: getAll } },
    repository: { userRepository },
  } = container.cradle;

  const app = instance({ userRepository, getAll });

  return router({ ...app });
};