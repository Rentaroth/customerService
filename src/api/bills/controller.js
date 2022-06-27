const helper = require('./helper');

const billGeneration = async (req, res) => {
  const { bill } = req.body;
  const result = await helper.generateNewBill(bill);
  return res.send(result).status(201);
};

const billFinding = async (req, res) => {
  const { id } = req.params;
  const result = await helper.getGeneratedBills(id);
  return res.send(result).status(200);
};

const billEditting = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.editBill(id, data);
  return res.send({ body: "Done!" }).status(200);
};

const billDeleting = async (req, res) => {
  const { id } = req.params;
  await helper.deleteABill(id);
  return res.send({ body: "Done!" }).status(200);
};

module.exports = {
  billGeneration,
  billFinding,
  billEditting,
  billDeleting,
};
