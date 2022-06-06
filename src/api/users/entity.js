const repository = require('./repository');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

class Users {
  constructor(id, firstName, lastName, idNumber, password, roleId) {
    this.id = id;
    this.first_name = firstName;
    this.last_name = lastName;
    this.id_number = idNumber;
    this.password = password;
    this.role_id = roleId;
  }

  getUsers() {
    return repository.get();
  }

  getOneUser() {
    return repository.getById(this.id);
  }

  async createUser() {
    const { first_name, last_name, id_number, password, role_id } = this;
    const created_at = new Date();
    const updated_at = new Date();
    return repository.create({
      id: await nanoid(10),
      first_name,
      last_name,
      id_number,
      password,
      role_id,
      created_at,
      updated_at,
    });
  }

  updateUser() {
    const {
      id,
      first_name,
      last_name,
      id_number,
      password,
      role_id,
    } = this;

    const payload = {
      first_name,
      last_name,
      id_number,
      password,
      role_id,
      updated_at: new Date(),
    }
    return repository.update(id, payload);
  }
  deleteUser() {
    return repository.erase(this.id);
  }
}

module.exports = Users;
