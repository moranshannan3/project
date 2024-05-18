import { Component } from "react";
import forms from "../components/forms";
import pages from "../components/pages";
import '../style/contactus.css';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      inputs: forms[1].input.reduce((acc, input) => {
        acc[input.placeholder.toLowerCase()] = '';
        return acc;
      }, {})
    };
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
    return (
      <div className="form2">
        <h2 id="name"><strong>{forms[1].name}</strong></h2>
        <div className="back">
          <p id="text2">{pages[7].text[0]}</p>
          <p id="text3">{pages[7].text[1]}</p>
          <img id="icon"  />
          <div id="triangle"></div>
          <div id="triangle1"></div>
        </div>
        <form className="contactus" action="/">
          {forms[1].input.map((inputField, index) => (
            <div key={index}>
              <label htmlFor={inputField.placeholder}>{inputField.placeholder}:</label><br />
              <input 
                type={inputField.type} 
                name={inputField.placeholder.toLowerCase()} 
                value={this.state.inputs[inputField.placeholder.toLowerCase()]} 
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