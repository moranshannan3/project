const db = require ('./db')


const getBookById = (bookID) => {
    const query = ` SELECT * from library where bookID=?`;
    console.log(query);
    return new Promise ((resolve, reject) => {
        db.query(query, [bookID], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getBookById,
  };
  