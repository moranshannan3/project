const express = require("express");
const cors = require('cors');
const { menuJson } = require('./myJson');
const { button } = require('./buttons');
const { forms } = require('./forms');
const { menu } = require('./menu');
const { pages } = require('./pages');
const { popUps } = require('./pop-ups');


const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());


app.get('/menuJson/:menuName', (req,res)=>{
 const menuName = req.params.menuName;
 const menu = menuJson.find(menu=>menu.menuName === menuName);
 if(!menu) {
  return res.status(404).send('Page not found');
 }
 res.json(menu);
});
app.get('/forms/:formName', (req,res)=>{
 const formName = req.params.formName;
 const form = forms.find(form=>form.formName === formName);
 if (!form) {
 return res.status(404).send('Page not found');
 }
 res.json(form);
});
app.get('/menu/:mName', (req,res)=>{
 const mName = req.params.mName;
 const menu1 = menu.find(menu1=>menu1.mName === mName);
 if (!menu1) {
 return res.status(404).send('Page not found');
 }
 res.json(menu1);
});
app.get('/pages/:pageName', (req,res)=>{
 const pageName = req.params.pageName;
 const page = pages.find(page=>page.pageName === pageName);
 if (!page) {
 return res.status(404).send('Page not found');
 }
 res.json(page);
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
res.json({ pages, buttons: button, popUps });
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});