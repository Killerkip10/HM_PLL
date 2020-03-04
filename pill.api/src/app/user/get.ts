import { UserRepository } from '../../infra/repositories';

export class Get {
  public constructor(
    private userRepository: UserRepository,
  ) { }

  public all() {
    return this.userRepository.getAll();
  }

  public byId(id: number) {
    return this.userRepository.getOne({ where: { id } });
  }
}
