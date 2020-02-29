export default ({ userRepository }) => {
  const getAll = () => userRepository.getAll();

  return {
    getAll,
  };
};