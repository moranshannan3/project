import { Component } from "react";
import forms from "../components/forms";
import pages from "../components/pages";
import '../style/AddYourQuestion.css';
export default class AddYourQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: forms[0].input.reduce((acc, inputField) => {
        acc[inputField.placeholder.toLowerCase()] = "";
        return acc;
      }, {})
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.state.inputs);
  }

  render() {
    return (
      <div className="form">
        <h2 id="name"><strong>{forms[0].name}</strong></h2>
        <p id="t1">{pages[4].text[0]}</p>
        <p id="t2">{pages[4].text[1]}</p>
        <form className="addyourquestion" onSubmit={this.handleSubmit}>
          {forms[0].input.map((inputField, index) => (
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
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
