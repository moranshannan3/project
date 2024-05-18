import { Component } from "react";
import pages from "../components/pages";
import '../style/aboutUs.css'; 
export default class AboutUs extends Component {

    render() {
        const textArray = pages[2].text;
        const textElements = [];
    
        for (let i = 0; i < textArray.length; i++) {
            let id = "";
            let content = textArray[i];
    
            switch(i) {
                case 0: id = "question";
                    break;
                case 1: id = "start";
                    break;
                case 2:
                    id = "text";
                    break;
                case 3:
                case 4:
                    id = i === 3 ? "text1" : "end";
                    content = <strong>{textArray[i]}</strong>;
                    break;
                default:
                    id = `text${i}`;
                    break;
            }
    
            textElements.push(<p key={i} id={id}>{content}</p>);
        }
    
        return (
            <div className="about">
                <h1 id="title">{pages[2].title}</h1>
                {textElements}
            </div>
        );
    }
}
