const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database username
  password: '', // Replace with your database password
  database: 'druze_journey' // Replace with your database name
});

connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB:', error);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
