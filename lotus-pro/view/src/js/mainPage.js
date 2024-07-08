import React, { Component } from "react";
import menu from '../components/menu';
import '../style/mainPage.css';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:null
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
        const link = [];
        for (let button of menu) {
            link.push(<li key={button.mName}><div className="bottunDegin"><a href={button.url}>{button.mName}</a></div></li>)
        }
        const { content } = this.state;
        if (!content) {
            return <div>Data not found</div>;
        }

        const welcome = content.Text.split('.').map((sentence, index) => (
            <li className="main-list-item" key={index}>{sentence.trim()}</li>
        ));
        return (
            <div className="main">
               <div className="t_b"> 
                   <ul className="welcome-list">
                       {welcome}
                   </ul>
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