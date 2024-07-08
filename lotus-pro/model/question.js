const db = require ('./db')

const getQuestionById = (ID) =>{
    
}  
    const query = 'INSERT INTO questions (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (error, results) => {
      if (error) {
        console.error('Error inserting data into database:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Your question has been submitted successfully!' });
    });
