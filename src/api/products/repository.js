const db = require("../../db");
const TABLES = require("../../db/tables");

const findById = async ({ id }) => {
    const query = db
      .select()
      .from(TABLES.products)
      .where({
        id
      });
  
    const [result] = await query;
    
    return result;
  };

module.exports = {
  findById,
};
