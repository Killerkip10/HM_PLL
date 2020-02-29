export const userRepository = (model) => {
  const getAll = (...args) => model.findAll(...args);

  const create = (...args) => model.create(...args);

  const update = (...args) => model.update(...args);

  return {
    getAll,
    create,
    update,
  };
};