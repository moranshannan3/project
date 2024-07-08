import React, { Component } from "react";
import '../style/aboutUs.css'; 

export default class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            textArray: null
        }
    }

    componentDidMount() {
        const pageID = 3; 
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    textArray: data
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { textArray } = this.state;
        if (!textArray) {
            return <div>Data not found</div>;
        }

        const textElements = textArray.Text.split('.').map((sentence, index) => (
            <li className="about-list-item" key={index}>{sentence.trim()}</li>
        ));
        const title = textArray.Title;

        return (
            <div className="about">
                <h1 id="about_title">{title}</h1>
                <ul id="about-back">{textElements}</ul>
            </div>
        );
    }
}

