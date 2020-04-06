import { PathReporter } from 'io-ts/lib/PathReporter';
import { isLeft } from 'fp-ts/lib/Either';

import { IUser, User } from '../../domain';
import { UserRepository } from '../../infra/repositories';

export class Post {
  public constructor(
    private userRepository: UserRepository,
  ) { }

  public create(user: IUser) {
    const entity = User.decode(user);

    if (isLeft(entity)) {
      return Promise.reject(PathReporter.report(entity));
    }

    return this.userRepository.create(user);
  }
}
