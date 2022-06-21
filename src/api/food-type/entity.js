const typesRepository = require('./repository');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

class Types {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  async getAll() {
    const result = await typesRepository.read();
    return result;
  }

  async getOne() {
    const result = await typesRepository.read(this.id);
    return result;
  }

  async createType() {
    const { name } = this;
    const payload = {
      id: await nanoid(10),
      name,
      created_at: new Date(),
      updated_at: new Date(),
    };
    return await typesRepository.create(payload);
  }

  async updateType() {
    const { id, name } = this;
    const payload = {
      name,
      updated_at: new Date(),
    };
    return await typesRepository.update(id, payload);
  }

  async deleteType() {
    const { id } = this;
    return await typesRepository.erase(id);
  }
}

module.exports = Types;
