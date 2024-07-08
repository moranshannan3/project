const express = require("express");
const cors = require('cors');

const { getPageById } = require('../../model/pages');
const { getPopUpById} = require ('../../model/popUps');
const { getFormById } = require ('../../model/forms');
const {getBookById} = require ('../../model/library')

const { menuJson } = require('./myJson');
const { popUps } = require('./pop-ups');
const { button } = require('./buttons')




const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/pages/:id', async(req, res) => {
  const pageID = req.params.id;
  console.log(pageID);
    try{
      const results = await getPageById(pageID);
      console.log(results);
      if (results) {
        res.json(results[0]); 
        } else {
         res.status(404).json({ error: 'Page not found' });
        }
                
      }
      catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Database error' });
      }
}); 

app.get('/forms/:id', async (req, res) => {
  const FormID = req.params.id;
  try {
    const form = await getFormById(FormID);
    if (form) {
      res.json(form);
    } else {
      res.status(404).json({ error: 'Form not found' });
    }
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Database error' });
  }
});


app.get('/popUps/:id', async (req, res) => {
  const popID = req.params.id;
  console.log(popID);
  try {
    const pop = await getPopUpById(popID);
    console.log(pop);
    if (pop.length > 0) {
      res.json(pop[0]);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/library/:id', async (req, res) => {
  const bookID = req.params.id;
  console.log(bookID);
  try {
      const results = await getBookById(bookID);
      console.log(results);
      if (results) {
          res.json(results[0]);
      } else {
          res.status(404).json({ error: 'Page not found' });
      }
  } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Database error' });
  }
});




app.get('/menuJson/:menuName', (req,res)=>{
 const menuName = req.params.menuName;
 const menu = menuJson.find(menu=>menu.menuName === menuName);
 if(!menu) {
  return res.status(404).send('Page not found');
 }
 res.json(menu);
});

app.get('/button', (req,res)=>{
 const buttons1 = button;
 if (!buttons1) {
 return res.status(404).send('Page not found');
 }
 res.json(buttons1);
});  
app.get('/popUps', (req,res)=>{
 const popUp = popUps;
 if (!popUp) {
 return res.status(404).send('Page not found');
 }
 res.json(popUp);
});

app.get('/allData', (req, res) => {
  res.json({ buttons: button, popUps });
  });

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});