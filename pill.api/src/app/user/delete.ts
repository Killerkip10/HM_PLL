export default ({ userRepository }) => {
  const all = (...args) => userRepository.getAll(...args);

  return {
    all,
  };
};