import { User } from '../../infra/models/User';
import { UserRepository } from '../../infra/repositories';

export class Create {
  public constructor(
    private userRepository: UserRepository,
  ) { }

  public create(user: User) {
    return this.userRepository.create(user);
  }
}
