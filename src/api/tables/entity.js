const repository = require('./repository');

class Tables {
  constructor(params) {
    this.id = params.id;
    this.table_size = params.tableSize;
    this.created_at = params.createdAt;
    this.updated_at = params.updatedAt;
  }

  async create() {
    const { id, table_size, created_at, updated_at } = this;
    const info = {
      id,
      table_size,
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
    const { id, table_size, updated_at } = this;
    const data = {
      table_size,
      updated_at,
    };
    return repository.update(id, data);
  }

  async erase() {
    const { id } = this;
    return repository.erase(id);
  }
}

module.exports = Tables;
