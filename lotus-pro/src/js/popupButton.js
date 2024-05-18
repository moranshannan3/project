import React, { Component } from 'react';
import POPUP from './POPUP.js';
import button from '../components/buttons.js';
import popUps from '../components/pop-ups';
import '../style/popupButton.css';
import pages from '../components/pages.js';

export default class PopupButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      popupData: { title: '', content: '' }
    };
  }

  toPopup = (index) => {
    const popup = popUps[index];
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
    return (
      <div>
        <h1 id="faq"> {pages[3].title}</h1>
        {button.map((btn, index) => (
          index === button.length - 1 ? (
            <a key={index} className="popup-button" href={btn.url}>
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