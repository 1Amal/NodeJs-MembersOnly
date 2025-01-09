const pool = require("./pool");

async function SQLUnauthorizedGetAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

module.exports = {
  SQLUnauthorizedGetAllMessages,
};