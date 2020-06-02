import { IllnessRepository } from '../../infra/repositories';

export class Delete {
	constructor(
		private illnessRepository: IllnessRepository,
	) { }

	public delete(id: number) {
		return this.illnessRepository.delete(id);
	}
}
