//model/pages.js
const db = require('./db');

const getPageById = (pageID) => {
  const query = 'SELECT * FROM pages WHERE pageID = ?';
  console.log(query);
  return new Promise ((resolve, reject) => {
            db.query(query, [pageID], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    };

module.exports = {
  getPageById,
};
