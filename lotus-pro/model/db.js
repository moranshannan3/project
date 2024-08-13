const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'druze_journey' 
});

connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB:', error);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
