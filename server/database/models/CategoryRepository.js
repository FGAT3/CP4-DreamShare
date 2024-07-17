const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async create(category) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [category.name]
    );
    return result.insertId;
  }
}

module.exports = CategoryRepository;
