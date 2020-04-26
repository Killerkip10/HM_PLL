import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
	const {
		methods: { user: { Get, Post } },
		repository: { userRepository },
	}: IContainer = container.cradle;

	const getUseCase = new Get(userRepository);
	const createUseCase = new Post(userRepository);

	return router(getUseCase, createUseCase);
};