class Database {
  static connections = [];

  constructor(data) {
    const existingConnection = Database.connections.find(
      (conn) => conn.data === data
    );
    if (existingConnection) {
      return existingConnection;
    }
    this.data = data;
    Database.connections.push(this);
    return this;
  }

  static getDataByIndex(index) {
    return Database.connections[index].data;
  }
}

const mongo = new Database("mongo");
const mysql = new Database("mysql");
const mysql2 = new Database("mysql2");

console.log(Database.getDataByIndex(0)); // "mongo"
console.log(Database.getDataByIndex(1)); // "mysql"
console.log(Database.getDataByIndex(2)); // "mysql2"
