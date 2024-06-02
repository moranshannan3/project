import React, { Component } from "react";
import menu from '../components/menu';
import '../style/mainPage.css';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3002/pages/mainpage') 
            .then(response => response.json())
            .then(data => this.setState({ pages: data }))
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const link = [];
        for (let button of menu) {
            link.push(<li key={button.menuId}><div className="bottunDegin"><a href={button.url}>{button.mName}</a></div></li>)
        }
        const { pages } = this.state;
        return (
            <div className="main">
               <div className="t_b"> 
               <h4 id="welcome" >{pages.text && pages.text[0]}</h4>
                <h4 id="welcome1">{pages.text && pages.text[1]}</h4>
               </div>
                <nav>
                    <ul>
                        {link}
                    </ul>
                </nav>
            </div>
        );
    }
}
