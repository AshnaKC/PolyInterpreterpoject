var mysql = require('mysql');
var connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"usersdb"
});
connection.connect();
const getUsers = require('./abc');
connection.end();
