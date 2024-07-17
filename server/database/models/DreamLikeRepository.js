const AbstractRepository = require("./AbstractRepository");

class DreamLikeRepository extends AbstractRepository {
  constructor() {
    super({ table: "dream_like" });
  }

  async create(dreamLike) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, dream_id) VALUES (?, ?)`,
      [dreamLike.userId, dreamLike.dreamId]
    );
    return result.insertId;
  }
}

module.exports = DreamLikeRepository;
