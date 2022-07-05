const helper = require('./helper');

const tabeCreation = async (req, res) => {
  const { table } = req.body;
  const result = await helper.createTable(table);
  return res.send(result).status(201);
};

const tableReading = async (req, res) => {
  const { id } = req.params;
  const result = await helper.readTables(id);
  return res.send(result).status(200);
};

const tableUpdating = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateTables(id, data);
  return res.send({ body: 'Done!' }).status(200);
};

const tableDeleting = async (req, res) => {
  const { id } = req.params;
  await helper.deleteTables(id);
  return res.send({ body: 'Done!' }).status(200);
};

module.exports = {
  tabeCreation,
  tableReading,
  tableUpdating,
  tableDeleting,
};
