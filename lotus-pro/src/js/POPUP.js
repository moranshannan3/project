import React from 'react';
import '../style/POPUP.css';


const POPUP = ({ closePopup, title, content }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>&times;</span>
        <h2 className='popuptitle'>{title}</h2>
        <p className="popuptext"> {content}</p>
      </div>
    </div>
  );
};

export default POPUP;