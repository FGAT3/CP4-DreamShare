const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
    this.defaultAvatar = "default-avatar.svg";
    this.defaultRole = "user";
  }

  async create(user) {
    const avatarImage = this.defaultAvatar;
    const role = user.role || this.defaultRole;

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
      role,
    ];

    const [result] = await this.database.query(sql, values);
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT id, firstname, lastname, avatar_image, pseudo, email, hashed_password FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT id, role, email, hashed_password FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows[0];
  }

  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} 
       SET 
         firstname = ?,
         lastname = ?,
         pseudo = ?,
         email = ?
       WHERE id = ?`,
      [user.firstname, user.lastname, user.pseudo, user.email, user.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = UserRepository;
