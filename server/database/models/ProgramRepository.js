const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    super({ table: "program" });
  }

  async create(program) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, category_id) VALUES (?, ?)`,
      [program.title, program.categoryId]
    );
    return result.insertId;
  }
}

module.exports = ProgramRepository;
