const db = require('./db');

const getPopUpById = (popID) => {
  const query = 'SELECT * FROM popUps WHERE popID = ?'; 
  console.log(query);
  return new Promise((resolve, reject) => {
    db.query(query, [popID], (err, results) => {
      if (err) {
        return reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getPopUpById,
};