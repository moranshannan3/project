import React, { Component } from "react";
import menu from '../components/menu';
import '../style/mainPage.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
    }

    componentDidMount() {
        const pageID = 2; 
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    content: data
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const link = menu.map((button, index) => {
            let buttonClass = "";
            switch (index) {
                case 0:
                    buttonClass = "specialButton";
                    break;
                case 1:
                    buttonClass = "buttonOne";
                    break;
                case 2:
                    buttonClass = "buttonTwo";
                    break;
                default:
                    buttonClass = "buttonDegin";
                    break;
            }

            return (
                <li key={button.mName}>
                    <div className={buttonClass}>
                     <a href={button.url}>
                         {button.mName}
                         <i className={`fas fa-${button.icon}`} style={{ marginLeft: '7px' }}></i>
                     </a>
                    </div>
                </li>
            );
        });

        const { content } = this.state;
        if (!content) {
            return <div>Data not found</div>;
        }
        
        return (
            <div>
                <Header />
                <div className="main">
                    <div className="buttonContainer">
                        <div className="buttonColumn">
                            {link[0]} {/* הכפתור המיוחד בעמודה הראשונה */}
                        </div>
                        <div className="buttonColumn">
                            {link[1]} {/* הכפתור הראשון בעמודה השנייה */}
                            {link[2]} {/* הכפתור השני בעמודה השנייה */}
                        
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
