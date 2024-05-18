import {Component} from "react";
import menu from '../components/menu';
import '../style/mainPage.css';
export default class MainPage extends Component {

    render (){
        const link= [];
        for (let button of menu){
            link.push( <li><div className="bottunDegin"> <a href={button.url}>{button.name}</a> </div></li>)
        }
        return (
          <div className="main">
           <nav>
            <ul>
           {link}
            </ul>  
          </nav> 
         </div>
        );
    }
}
