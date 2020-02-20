import { userRepository } from './user';

export const repository = ({ database }) => {
  const {
    models: {
      User,
    },
  } = database;

   return {
     userRepository: userRepository(User),
   };
};