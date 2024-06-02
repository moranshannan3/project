import React, { Component } from "react";
import '../style/aboutUs.css'; 

export default class AboutUs extends Component {
    state = {
        title: "",
        textArray: []
    };

    componentDidMount() {
        fetch('http://localhost:3002/pages/about us')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    textArray: data.text
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { title, textArray } = this.state;
        const textElements = textArray.map((content, i) => {
            if (i === 3 || i === 4) {
                content = <strong>{content}</strong>;
            }

            return <p key={i} className="about-text">{content}</p>;
        });

        return (
            <div className="about">
                <h1 id="about_title">{title}</h1>
             <div id="about-back">   {textElements}</div>
            </div>
        );
    }
}
