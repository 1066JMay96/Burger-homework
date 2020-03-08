const mysql = require('mysql');

require('dotenv').config();

if(process.env.burger_menu_item) {
  console.log("We're in production");
  console.log(process.env.burger_menu_item);
} else {
  console.log("We're in development");
  console.log(process.env.burger_menu_item);
}


const connection = process.env.JAWSDB_URL
? mysql.createConnection(process.env.JAWSDB_URL)
 :mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password:process.env.DB_PW,
  database: process.env.DB_NAME
});



module.exports = connection;