const Repository = require("./repository");

class Products {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.price = params.price;
    this.type = params.type;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
    this.deletedAt = params.deletedAt;
    this.typeId = params.typeId;
  }

  async findById() {
    const { id } = this;
    return await Repository.findById({ id });
  }

  create() {
    const {
        id,
        name,
        description,
        price,
        type,
        createdAt,
        updatedAt,
        deletedAt,
        typeId
    } = this;
    return Repository.create({
        id,
        name,
        description,
        price,
        type,
        createdAt,
        updatedAt,
        deletedAt,
        typeId
    });
  }
}

module.exports = Products;
