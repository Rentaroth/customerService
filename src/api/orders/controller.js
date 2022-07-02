const helper = require('./helper');

const orderCreation = async (req, res) => {
  const { order } = req.body;
  const result = await helper.createOrder(order);
  return res.send(result).status(201);
};

const orderFinding = async (req, res) => {
  const { id } = req.params;
  const result = await helper.findOrders(id);
  return res.send(result).status(200);
};

const orderUpdating = async (req, res) => {
  const { data } = req.body;
  const { id } = req.params;
  const info = {
    id,
    ...data,
  };
  await helper.updateOrder(info);
  return res.send({ body: 'Done!' }).status(200);
};

const orderDeleting = async (req, res) => {
  const { id } = req.params;
  await helper.deleteOrder(id);
  return res.send({ body: 'Done!' }).status(200);
};

module.exports = {
  orderCreation,
  orderFinding,
  orderUpdating,
  orderDeleting
};
