import { IllnessRepository } from '../../infra/repositories';

export class Get {
  public constructor(
    private userRepository: IllnessRepository,
  ) { }

  public all() {
    return this.userRepository.getAll();
  }
}
