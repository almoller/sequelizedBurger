// require("dotenv").config();

var keys = require("./keys.js");
var mysql = require("mysql");

var sql_PW = keys.mySQL_DB.SQL_key

// var connection = mysql.createConnection({
//   port: 3306,
//   host: process.env.host || "localhost",
//   user: process.env.user || "root",
//   password: process.env.password || sql_PW,
//   database: process.env.database || "burgers_db"
// });
var connection = mysql.createConnection({
  port: 3306,
  host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qvbmnjpdes987ut2",
  password: "j2uq9d7p95e0cgfw",
  database: "g1mkzvyu87y8a89l"
});



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

