const Entity = require("./entity");

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const productEntity = new Entity({
      id,
    });

    const product = await productEntity.findById();

    if (!product) throw new Error("PRODUCT_NOT_FOUND");

    return res.send(products);

  } catch (error) {
    console.log("Error getting Product", error);
    return res.status(404).json({ status: "Error getting Product" });
  }
};

module.exports = {
  getProductById,
};
