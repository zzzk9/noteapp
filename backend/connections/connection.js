var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "collection",
  port: 3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
