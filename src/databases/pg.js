const { Console } = require("console");
const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "ec2-18-191-91-23.us-east-2.compute.amazonaws.com",
  database: "ZAM_GAME",
  password: "ZamZamZam52!",
  port: 8999,
};

class database {
  #pool;
  #client;
  constructor() {
    this.#pool = new Pool(credentials);
    this.#client = new Client(credentials);
  }
  runQuery(query, params) {
    this.#pool.connect();
    this.#pool.query(query, params, function (err) {
      if (err) {
        console.log("Database operation failed.");
        throw err;
      }
    });
    this.#pool.end();
  }
  async fetch(query, params) {
    this.#pool.connect();
    try {
      const res = await this.#pool.query(query, params);
      return res;
    } catch (err) {
      console.log("Database connection failed.");
      return err;
    } finally {
      this.#pool.end();
    }
  }
}

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

module.exports = database;
