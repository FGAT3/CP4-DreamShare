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
    const [rows] = await this.database.query(`
      SELECT 
        article.id,
        DATE_FORMAT(article.created_at, '%d-%m-%Y') AS formatted_date,
        article.title,
        article.image,
        article.content,
        article.user_id,
        user.firstname,
        user.lastname,
        user.avatar_image
      FROM article
      JOIN user ON article.user_id = user.id
    `);
    return rows;
  }
}

module.exports = ArticleRepository;
