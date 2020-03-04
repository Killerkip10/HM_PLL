export default ({ userRepository, get, create }) => {
  const getUseCase = get(userRepository);
  const createUseCase = create(userRepository);

  return {
    getUseCase,
    createUseCase,
  };
};