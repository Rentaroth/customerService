const repository = require('./repository');

class Bills {
  constructor(params) {
    this.id = params.id;
    this.total = params.total;
    this.book_id = params.bookId;
    this.created_at = params.createdAt;
    this.updated_at = params.updatedAt;
    this.cashier_id = params.cashierId;
    this.cashier_admin_id = params.cashierAdminId;
  }

  async generateBill() {
    const {
      id,
      total,
      book_id,
      created_at,
      updated_at,
      cashier_id,
      cashier_admin_id,
    } = this;
    const info = {
      id,
      total,
      book_id,
      created_at,
      updated_at,
      cashier_id,
      cashier_admin_id,
    };
    const result = await repository.create(info);
    return result;
  }

  async getBills() {
    const { id } = this;
    return repository.read(id);
  }

  async updateBill() {
    const {
      id,
      total,
      book_id,
      created_at,
      updated_at,
      cashier_id,
      cashier_admin_id,
    } = this;
    const data = {
      total,
      book_id,
      created_at,
      updated_at,
      cashier_id,
      cashier_admin_id,
    };
    return repository.update(id, data);
  }

  async deleteBill() {
    const { id } = this;
    return repository.erase(id);
  }
}

module.exports = Bills;