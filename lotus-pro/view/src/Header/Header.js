import { Component } from "react";
import logo from '../img/logo.png';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:3002/menuJson/header')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title[0],
                    subtitle: data.title[1]
                });
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="page">
                <div className="home">
                    <a href="/" className="logo" >
                        <img id="logo" src={logo} alt="logo" />
                    </a>
                    <h1 id="Maintitle"> {this.state.title}</h1>
                    <h4 id="Subtitle">{this.state.subtitle}</h4>
                </div>
            </div>
        );
    }
}