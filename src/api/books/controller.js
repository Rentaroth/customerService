const helper = require('./helper');

const bookCreation = async (req, res) => {
  const { book } = req.body;
  const result = await helper.createBook(book);
  return res.send(result).status(201);
};

const bookReading = async (req, res) => {
  const { id } = req.params;
  const result = await helper.readBooks(id);
  return res.send(result).status(200);
};

const bookUpdating = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateBooks(id, data);
  return res.send({ body: 'Done!' }).status(200);
};

const bookDeleting = async (req, res) => {
  const { id } = req.params;
  await helper.deleteBook(id);
  return res.send({ body: 'Done!' }).status(200);
};

module.exports = {
  bookCreation,
  bookReading,
  bookUpdating,
  bookDeleting,
};
