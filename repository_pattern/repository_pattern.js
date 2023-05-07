class UserRepository {
  constructor(database) {
    this.database = database;
  }

  async getUserById(id) {
    const user = await this.database.query(
      `SELECT * FROM users WHERE id = ${id}`
    );
    return user;
  }

  async createUser(user) {
    const result = await this.database.query(
      `INSERT INTO users (name, email) VALUES ('${user.name}', '${user.email}')`
    );
    return result;
  }

  async updateUser(id, user) {
    const result = await this.database.query(
      `UPDATE users SET name = '${user.name}', email = '${user.email}' WHERE id = ${id}`
    );
    return result;
  }

  async deleteUser(id) {
    const result = await this.database.query(
      `DELETE FROM users WHERE id = ${id}`
    );
    return result;
  }
}

// Sử dụng UserRepository
const userRepository = new UserRepository(database);

const user = await userRepository.getUserById(1);
console.log(user);

const newUser = { name: "Nguyễn Tiến Tài", email: "nguyentientai@gmail.com" };
await userRepository.createUser(newUser);

const updatedUser = { name: "Tài Heo", email: "nguyentientai@gmail.com" };
await userRepository.updateUser(1, updatedUser);

await userRepository.deleteUser(1);
