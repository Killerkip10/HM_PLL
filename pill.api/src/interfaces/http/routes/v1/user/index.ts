import router from './router';
import instance from './instance';
import { container } from '../../../../../container';

export default () => {
  const {
    methods: { user: { get, create } },
    repository: { userRepository },
  } = container.cradle;

  const app = instance({ userRepository, get, create });

  return router({ ...app });
};