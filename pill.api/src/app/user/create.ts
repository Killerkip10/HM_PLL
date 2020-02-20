export default ({ userRepository }) => {
  const create = (...args) => userRepository.create(...args);

  return {
    create,
  };
};