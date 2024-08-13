import React, { Component } from "react";
import logo from '../logoimg/logo.png';
import './Header.css';
import headermenu from '../components/headermenu';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleArray: null
        };
    }

    componentDidMount() {
        const pageID = -1; 
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    titleArray: data
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const link1 = [];
        for (let button1 of headermenu) {
          
            link1.push(
                <li key={button1.hmName}>
                    <div className="menuDegin">
                        <a href={button1.url}>
                            <i className={`fas fa-${button1.icon}`}></i>
                            {button1.hmName}
                        </a>
                    </div>
                </li>
            );
        }
        const { titleArray } = this.state;
        if (!titleArray) {
            return <div>Data not found</div>;
        }

        const title1 = titleArray.Title;
        return (
            <div className="page">
                <div className="home">
                    <a href="/menu" className="logo" >
                        <img id="logo" src={logo} alt="logo" />
                    </a>
                    <div>
                        <h1 id="Maintitle">{title1}</h1>
                    </div>
                    <ul className="header-menu">
                        {link1}
                    </ul>
                </div>
            </div>
        );
    }
}

