const helper = require('./helper');

const userCreator = async (req, res) => {
  const { user } = req.body;
  const result = await helper.createValidatedUser(user);
  res.send(result).status(200);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const result = await helper.getUsersStored(id);
  return res.send(result).status(200);
};

const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  await helper.deleteUser(id);
  return res.send({
    body: `User with id: ${id} deleted!`,
  });
};

const updateOneUser = async (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  const result = await helper.updateUser(id, user);
  if (result === 1) {
    return res.send({
      body: `Updated user with id: ${id}`,
    });
  }
  return res.send({
    body: `User with id: ${id} has not been updated.`,
  });
};

module.exports = {
  userCreator,
  getUser,
  deleteOneUser,
  updateOneUser,
};
