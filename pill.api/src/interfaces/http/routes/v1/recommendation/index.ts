import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
	const {
		methods: { recommendation: { Get } },
		repository: { recommendationRepository },
	}: IContainer = container.cradle;

	const getUseCase = new Get(recommendationRepository);

	return router(getUseCase);
};
