const helper = require('./helper');

const userCreator = async (req, res) => {
  const { user } = req.body;
  const result = await helper.createValidatedUser(
    user.firstName,
    user.lastName,
    user.idNumber,
    user.password,
    user.roleId,
  );
  res.send(result).status(200);
};

const getAllUsers = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const result = await helper.getUsersStored(id);
    return res.send(result).status(200);
  }
  const result = await helper.getUsersStored();
  return res.send(result).status(200);
};

const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  const result = await helper.deleteUser(id);
  return res.send({
    body: `User with id: ${id} deleted!`,
  });
};

const updateOneUser = async (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  const result = await helper.updateUser(
    id,
    user.firstName || undefined,
    user.lastName || undefined,
    user.idNumber || undefined,
    user.password || undefined,
    user.roleId || undefined,
  );
  if(result === 1) {
    return res.send({
      body: `Updated user with id: ${id}`,
    });
  }
  return res.send({
    body: `Not updated user with id: ${id}`,
  });
};

module.exports = {
  userCreator,
  getAllUsers,
  deleteOneUser,
  updateOneUser,
};
