import { IllnessRepository } from '../../infra/repositories';

export class Get {
  public constructor(
    private userRepository: IllnessRepository,
  ) { }

  public all() {
    return this.userRepository.getAll();
  }

  public byId(id: number) {
		return this.userRepository.getById(id);
	}

  public bySymptomIds(ids: number[]) {
		if (!ids || !ids.length) {
			return Promise.reject();
		}

		return this.userRepository.getBySymptomIds(ids);
	}
}
