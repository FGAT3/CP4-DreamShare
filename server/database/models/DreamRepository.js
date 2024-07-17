const AbstractRepository = require("./AbstractRepository");

class DreamRepository extends AbstractRepository {
  constructor() {
    super({ table: "dream" });
  }

  async create(dream) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, content, user_id) VALUES (?, ?, ?)`,
      [dream.title, dream.content, dream.userId]
    );
    return result.insertId;
  }
}

module.exports = DreamRepository;
