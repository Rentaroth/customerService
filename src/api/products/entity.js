const Repository = require('./repository');

class Products {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.price = params.price;
    this.type = params.type;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
    this.deleted_at = params.deleted_at;
    this.type_id = params.typeId;
  }

  async find() {
    const { id } = this;
    if (id) {
      console.log(id);
      return await Repository.read(id);
    }
    return await Repository.read();
  }

  create() {
    const { id, name, description, price, type, created_at, updated_at } = this;
    return Repository.create({
      id,
      name,
      description,
      price,
      type,
      created_at,
      updated_at,
    });
  }

  update() {
    const { id, name, description, price, type, updated_at } = this;
    return Repository.update(id, {
      name,
      description,
      price,
      type,
      updated_at,
    });
  }

  delete() {
    const { id } = this;
    return Repository.erase(id);
  }
}

module.exports = Products;

