const AbstractRepository = require("./AbstractRepository");

class ArticleRepository extends AbstractRepository {
  constructor() {
    super({ table: "article" });
  }

  async create(article) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, image, content, user_id) VALUES (?, ?, ?, ?)`,
      [article.title, article.image, article.content, article.userId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = ArticleRepository;
