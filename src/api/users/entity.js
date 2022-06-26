const { customAlphabet } = require('nanoid');
const repository = require('./repository');

const nanoid = customAlphabet('1234567890', 10);

class Users {
  constructor(params) {
    this.id = params.id;
    this.first_name = params.firstName;
    this.last_name = params.lastName;
    this.id_number = params.idNumber;
    this.password = params.password;
    this.role_id = params.roleId;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }

  async getUsers() {
    const { id } = this;
    const result = await repository.get(id);
    return result;
  }

  async createUser() {
    const {
      id,
      first_name,
      last_name,
      id_number,
      password,
      role_id,
      created_at,
      updated_at,
    } = this;
    return repository.create({
      id,
      first_name,
      last_name,
      id_number,
      password,
      role_id,
      created_at,
      updated_at,
    });
  }

  async updateUser() {
    const {
      id,
      first_name,
      last_name,
      id_number,
      password,
      role_id,
      updated_at,
    } = this;

    const payload = {
      first_name,
      last_name,
      id_number,
      password,
      role_id,
      updated_at,
    };
    return repository.update(id, payload);
  }

  async deleteUser() {
    const { id } = this;
    return repository.erase(id);
  }
}

module.exports = Users;
