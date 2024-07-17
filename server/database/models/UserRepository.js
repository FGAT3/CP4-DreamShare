const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
    this.defaultAvatar = "default-avatar.svg";
  }

  async create(user) {
    const avatarImage = this.defaultAvatar;

    const sql = `
      INSERT INTO ${this.table} (firstname, lastname, avatar_image, pseudo, email, hashed_password, role)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      user.firstname,
      user.lastname,
      avatarImage,
      user.pseudo,
      user.email,
      user.hashedPassword,
      user.role,
    ];

    const [result] = await this.database.query(sql, values);
    return result.insertId;
  }
}

module.exports = UserRepository;
