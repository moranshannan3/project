import React, { Component } from "react";
import '../style/AddYourQuestion.css';

export default class AddYourQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
      form: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/forms/Add%20Your%20Question')
      .then(response => response.json())
      .then(data => {
        const inputs = data.input.reduce((acc, inputField) => {
          acc[inputField.placeholder.toLowerCase()] = "";
          return acc;
        }, {});
        this.setState({ form: data, inputs: inputs });
      })
      .catch(error => console.error('Error fetching form data:', error));
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
    const { form } = this.state;
    if (!form) {
      return <div>Loading...</div>;
    }
    return (
      <div className="form">
        <h2 id="fname"><strong>{form.formName}</strong></h2>
        <p id="t1">{form.text[0]}</p>
        <p id="t2">{form.text[1]}</p>
        <form className="addyourquestion" onSubmit={this.handleSubmit}>
          {form.input.map((inputField, index) => (
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
