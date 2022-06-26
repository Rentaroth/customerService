const typesRepository = require('./repository');

class Types {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }

  async getAll() {
    const result = await typesRepository.read();
    return result;
  }

  async getOne() {
    const { id } = this;
    const result = await typesRepository.read(id);
    return result;
  }

  async createType() {
    const { id, name, created_at, updated_at } = this;
    const payload = {
      id,
      name,
      created_at,
      updated_at,
    };
    return typesRepository.create(payload);
  }

  async updateType() {
    const { id, name, updated_at } = this;
    const payload = {
      name,
      updated_at,
    };
    return typesRepository.update(id, payload);
  }

  async deleteType() {
    const { id } = this;
    return await typesRepository.erase(id);
  }
}

module.exports = Types;
