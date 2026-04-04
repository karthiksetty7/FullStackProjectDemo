const mysql = require('mysql2')
require('dotenv').config()

const db = mysql.createPool({
  uri: process.env.MYSQL_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false,
  },
})

db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection error:', err)
  } else {
    console.log('MySQL connected')
    connection.release()
  }
})

module.exports = db
