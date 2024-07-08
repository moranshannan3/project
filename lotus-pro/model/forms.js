const db = require('./db');

const getFormById = (FormID) => {
  const query = `
    SELECT f.formID, f.formName, f.text, 
           i.inputID, i.label, i.PlaceHolder, i.Type
    FROM forms f
    LEFT JOIN formsinput fi ON f.formID = fi.formID
    LEFT JOIN input i ON fi.inputID = i.inputID
    WHERE f.formID = ?;`;
   console.log(query); 
  return new Promise((resolve, reject) => {
    db.query(query, [FormID], (error, results) => {
      if (error) return reject(error);
      if (results.length === 0) {
        resolve(null);
      } else {
        const form = {
          formID: results[0].formID,
          formName: results[0].formName,
          text: results[0].text,
          inputs: results.map(row => ({
            inputID: row.inputID,
            label: row.label,
            PlaceHolder: row.PlaceHolder,
            Type: row.Type
          }))
        };
        resolve(form);
      }
    });
  });
};



module.exports = {
  getFormById,
  
};
