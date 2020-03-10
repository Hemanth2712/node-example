const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "MyNewPass",
    database: "Node",
    multipleStatements: true

});
mysqlConnection.connect((err) => {

    if (err) throw err;

    console.log('Connected!');
});

module.exports = mysqlConnection;