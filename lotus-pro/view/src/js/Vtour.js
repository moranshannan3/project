
import React, { Component } from "react";
import '../style/Vtour.css'; 

export default class Tour extends Component {
  state = {
    title: "",
    text: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch("http://localhost:3002/pages/vtour")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          title: data.title,
          text: data.text,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { title, text, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="vtour">
        <h1 id="title"> {title}</h1>
        <p id="s1">{text[0]}</p>
        <p id="s2">{text[1]}</p>
        <image id="img"></image>
      </div>
    );
  }
}

