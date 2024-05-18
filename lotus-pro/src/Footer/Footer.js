import {Component} from "react";
import menuJson from '../components/myJson';
import './Footer.css';
export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <h5 id="footer1">{menuJson[1].mainT}</h5>
            </div>
        )
    }
}