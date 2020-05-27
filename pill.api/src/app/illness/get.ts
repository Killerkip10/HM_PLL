import { IllnessRepository } from '../../infra/repositories';

export class Get {
  public constructor(
    private illnessRepository: IllnessRepository,
  ) { }

  public all(query: object) {
  	return this.illnessRepository.getAll(query);
	}

  public byId(id: number) {
		return this.illnessRepository.getById(id);
	}

  public bySymptomIds(ids: number[]) {
		if (!ids || !ids.length) {
			return Promise.reject();
		}

		return this.illnessRepository.getBySymptomIds(ids);
	}
}
