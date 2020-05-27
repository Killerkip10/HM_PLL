import { SymptomRepository } from '../../infra/repositories';

export class Delete {
	constructor (
		private symptomRepository: SymptomRepository,
	) { }

	public byId(id: number) {
		return this.symptomRepository.delete(id);
	}
}
