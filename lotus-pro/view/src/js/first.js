import React, { Component } from "react";
import '../style/first.css'; 
import logo1 from '../logoimg/2.png';
import Footer from "../Footer/Footer";

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            array: null
        }
    }

    componentDidMount() {
        const pageID = 1; 
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                   array: data
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { array } = this.state;
        if (!array) {
            return <div>Data not found</div>;
        }

        const Elements = array.Text;
        const title = array.Title;

        return (
            <div>
            <div className="flag">
              <div className="background">
                 <h1 id="htitle">{title}</h1>
                 <h3 id="htext">{Elements}</h3>
                 <a href="/menu" className="logo1">
                      <img id="fpic" src={logo1} alt="Logo" />
                      <span className="logo-text">Menu</span>
                 </a>
              </div>
            </div>
            <Footer></Footer>
            </div>
        );
    }
}
