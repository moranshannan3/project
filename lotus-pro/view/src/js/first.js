import React, { Component } from "react";
import '../style/first.css'; 
import logo from '../logoimg/2.png';


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
            <div className="home">
                <image  id="pic" src={2} />
                <h1 id="htitle">{title}</h1>
                <h3 id="htext">{Elements}</h3>
            </div>
        );
    }
}
