import {Component} from "react";
import menuJson from '../components/myJson';
import logo from '../img/logo.png';
import './Header.css';
export default class Header extends Component {

    render (){
        return (<div className="page">
            <div className="home">
                <img src={logo} height="50px" width="50px"/>
               <h1 id="Maintitle"> {menuJson[0].title[0]}</h1> 
               <h4 id="Subtitle">{menuJson[0].title[1]}</h4>  
            </div>
            </div>
        );
    }
}

