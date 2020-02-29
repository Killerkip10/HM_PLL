export const instance = ({ userRepository, getAll }) => {
  const getUseCase = getAll({ userRepository });

  return {
    getUseCase,
  };
};