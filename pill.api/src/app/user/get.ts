export default (userRepository) => {
  const all = () => userRepository.getAll();

  const byId = (id: number) => userRepository.getOne({ where: { id } });

  return {
    all,
    byId,
  };
};