const repository = require('./repository');

class Order {
  constructor(params) {
    this.id = params.id;
    this.bill_id = params.billId;
    this.products_id = params.productsId;
    this.created_at = params.createdAt;
    this.updated_at = params.createdAt;
  }

  async create() {
    const { id, bill_id, products_id, created_at, updated_at } = this;
    const info = {
      id,
      bill_id,
      products_id,
      created_at,
      updated_at,
    };
    return repository.create(info);
  }

  async read() {
    const { id } = this;
    return repository.read(id);
  }

  async update() {
    const { id, bill_id, products_id, updated_at } = this;
    const data = {
      bill_id,
      products_id,
      updated_at,
    };
    return repository.update(id, data);
  }

  async erase() {
    const { id } = this;
    return repository.erase(id);
  }
}

module.exports = Order;
