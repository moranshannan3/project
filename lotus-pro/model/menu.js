const db = require('./db');

const getMenuById = (id, callback) => {
  const query = 'SELECT * FROM menu WHERE id = ?';
  db.query(query, [id], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results[0]);
  });
};

module.exports = {
  getMenuById
};
