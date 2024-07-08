import React, { Component } from 'react';
import POPUP from './POPUP.js';
import '../style/popupButton.css';

export default class PopupButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      popupData: { title: '', content: '' },
      buttons: [],
      pages: [],
      popUps: []
    };
  }

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData = async () => {
    try {
      const response = await fetch('http://localhost:3002/allData');
      const { buttons,  popUps } = await response.json();
      this.setState({ buttons,  popUps });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  toPopup = (index) => {
    const popup = this.state.popUps[index];
    if (popup) {
      const { title, content } = popup;
      this.setState({ popupData: { title, content }, showPopup: true });
    } else {
      console.error('Popup data not found for index:', index);
    }
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { buttons } = this.state;
    const title='FAQ:Frequently Asked Questions';

    return (
      <div>
        <h1 id="faq">{title}</h1>
        <div className="buttons-container">
          {buttons.map((btn, index) => (
            index === buttons.length - 1 ? (
              <a key={index} className="popup-button special-button" href={btn.url}>
                {btn.value}
              </a>
            ) : (
              <button
                key={index}
                className="popup-button"
                onClick={() => this.toPopup(index)}
              >
                {btn.value}
              </button>
            )
          ))}
        </div>
        {this.state.showPopup && (
          <POPUP
            closePopup={this.closePopup}
            title={this.state.popupData.title}
            content={this.state.popupData.content}
          />
        )}
      </div>
    );
  }
}