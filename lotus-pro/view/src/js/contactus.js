import React, { Component } from "react";
import '../style/contactus.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/forms/2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ form: data, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // מונע את שליחת הטופס
    alert("Your message has been received! Thanks for getting in touch. We will be happy to help you with any question.");
  }

  render() {
    const { form, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <Header></Header>
        <div className="form2">
          <h1 id="name"><strong>{form.formName}</strong></h1>
          <div className="back">
            <p id="ctext">{form.text}</p>
            <img id="icon1" alt="" />
            <div id="trinagle"></div>
            <div id="trinagle1"></div>
          </div>

          <form className="contactus" onSubmit={this.handleSubmit} action="/">
            {form.inputs.map(input => (
              <div key={input.inputID}>
                <label htmlFor={input.inputID}>{input.label}</label>
                {input.Type === 'textarea' ? (
                  <textarea
                    id={input.inputID}
                    name={input.label.toLowerCase()}
                    placeholder={input.PlaceHolder}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={input.Type}
                    id={input.inputID}
                    name={input.label.toLowerCase()}
                    placeholder={input.PlaceHolder}
                    required
                  />
                )}
              </div>
            ))}
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
