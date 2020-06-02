import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
	const {
		methods: { illnessReview: { Get, Post } },
		repository: { illnessReviewRepository },
	}: IContainer = container.cradle;

	const getUseCase = new Get(illnessReviewRepository);
	const createUseCase = new Post(illnessReviewRepository);

	return router(getUseCase, createUseCase);
};
