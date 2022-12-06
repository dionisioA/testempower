
const mysql= require('mysql');
const config= require('../config/config');

const mysqlConnection=mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.database,
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('db is connected');
    }
  });
  
  module.exports = mysqlConnection;
