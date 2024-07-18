const AbstractRepository = require("./AbstractRepository");

class CommentRepository extends AbstractRepository {
  constructor() {
    super({ table: "comment" });
  }

  async create(comment) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (content, user_id, article_id, dream_id) VALUES (?, ?, ?, ?)`,
      [comment.content, comment.userId, comment.articleId, comment.dreamId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = CommentRepository;
