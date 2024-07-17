const AbstractRepository = require("./AbstractRepository");

class ArticleLikeRepository extends AbstractRepository {
  constructor() {
    super({ table: "article_like" });
  }

  async create(articleLike) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, article_id) VALUES (?, ?)`,
      [articleLike.userId, articleLike.articleId]
    );
    return result.insertId;
  }
}

module.exports = ArticleLikeRepository;
