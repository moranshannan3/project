import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AddYourQuestion from "./js/AddYourQuestion.js";
import PopupButton from './js/popupButton.js'
import ContactUs from './js/contactus.js';
import AboutUs from './js/aboutUs.js';
import MainPage from  './js/mainPage.js';
import Tour from "./js/Vtour.js";
import Library from "./js/library.js";
import HomePage from './js/first.js';

export default function App() {

  return (
<div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage/>}/>
          <Route index element={<HomePage/>}/>
          <Route path="/menu" element={<MainPage/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/thelibrary" element={<Library/>}/>
          <Route path="/addyourquestion" element={<AddYourQuestion/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/FAQ" element={<PopupButton/>}/>
          <Route path="/vrtour" element={<Tour/>}/>        
          <Route path="*" element={<noPage/>}/>
          
        </Route>
      </Routes>
     </BrowserRouter>
  </div>
  );
};