const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_User,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect(err => {
    if (err) {
        console.error("error connecting: to mysql", err.stack );
      } else {
        console.log("Connecté à MySQL", connection.threadId);
      }
})

module.exports = connection;