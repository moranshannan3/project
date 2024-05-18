import { Component } from "react";
import pages from "../components/pages";
import '../style/VRtour.css'; 
export default class Tour extends Component {

    render (){
        return (
            <div className="vrtour">
               <h1 id="title"> {pages[6].title}</h1>   
               <p id="s1">{pages[6].text[0]}</p>
               <p id="s2">{pages[6].text[1]}</p>
               <image id="img"></image>
            </div>
        );
    }
}
