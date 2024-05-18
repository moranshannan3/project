import { Component } from "react";
import pages from "../components/pages";
import  '../style/library.css';
export default class Library extends Component {

    render (){
        return (
            <div className="lib">
               <h1 id="first"> {pages[5].title}</h1> 
               <p id="sen"><strong>{pages[5].text}</strong> </p>     
            </div>
        );
    }
}
