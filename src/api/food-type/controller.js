const helper = require('./helper');

const typeReading = async (req, res) => {
  const { id } = req.params;
  const result = await helper.readTypes(id);
  return res.send(result).status(200);
};

const typeCreation = async (req, res) => {
  const { data } = req.body;
  const result = await helper.createNewType(data.name);
  return res.send(result).status(200);
};

const typeUpdating = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  const result = await helper.updateType(id, data);
  return res.send(result).status(200);
}

const typeDeleting = async (req, res) => {
  const { id } = req.params;
  const result = await helper.deleteType(id);
  return res.send(result).status(200);
}

module.exports = {
  typeReading,
  typeCreation,
  typeUpdating,
  typeDeleting,
};
