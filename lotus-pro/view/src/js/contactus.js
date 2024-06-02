import React, { Component } from "react";
import '../style/contactus.css';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputs: {},
      form: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchFormData();
  }

  fetchFormData = () => {
    fetch('http://localhost:3002/forms/Contact%20Us')
      .then(response => response.json())
      .then(data => {
        const inputs = data.input.reduce((acc, input) => {
          acc[input.placeholder.toLowerCase()] = '';
          return acc;
        }, {});
        this.setState({ form: data, inputs, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }));
  };

  render() {
    const { form, inputs, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="form2">
        <h2 id="name"><strong>{form.formName}</strong></h2>
        <div className="back">
          <p id="text2">{form.text[0]}</p>
          <p id="text3">{form.text[1]}</p>
          <img id="icon" />
          <div id="triangle"></div>
          <div id="triangle1"></div>
        </div>
        <form className="contactus" action="/">
          {form.input.map((inputField, index) => (
            <div key={index}>
              <label htmlFor={inputField.placeholder}>{inputField.placeholder}:</label><br />
              <input 
                type={inputField.type} 
                name={inputField.placeholder.toLowerCase()} 
                value={inputs[inputField.placeholder.toLowerCase()]} 
                onChange={this.handleChange} 
              /><br />
            </div>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}