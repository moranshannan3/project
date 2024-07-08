const { submitQuestion } = require('../models/questionModel');

const handleFormSubmission = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await submitQuestion(name, email, message);
    res.status(200).json({ message: 'Your question has been submitted successfully!' });
  } catch (error) {
    console.error('Error inserting data into database:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = {
  handleFormSubmission
};
