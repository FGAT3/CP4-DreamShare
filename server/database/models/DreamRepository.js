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

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readAllWithUserInfo() {
    const [rows] = await this.database.query(`
      SELECT 
        dream.id,
        DATE_FORMAT(dream.created_at, '%d-%m-%Y') AS formatted_date,
        dream.title,
        dream.content,
        dream.user_id,
        user.firstname,
        user.lastname,
        user.avatar_image
      FROM ${this.table}
      JOIN user ON dream.user_id = user.id
    `);
    return rows;
  }
}

module.exports = DreamRepository;
