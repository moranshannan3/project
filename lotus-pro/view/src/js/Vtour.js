
import React, { Component } from "react";
import '../style/Vtour.css';
import 'aframe';
import { Entity, Scene } from 'aframe';
import sence from '../vrtour/sence1.jpg';
import sence2 from '../vrtour/sence2.jpg';

export default class Tour extends Component {
  constructor(props){
    super(props);
    this.state = {
        tour: null
    }
}
componentDidMount() {
  const pageID = 7; 
  fetch(`http://localhost:3002/pages/${pageID}`)
      .then(response => {
          if(!response.ok){
              throw new Error('Failed to fetch data');
          }
          return response.json();
      })
      .then(data => {
          this.setState({
              tour: data
          });
      })
      .catch(error => console.error('Error fetching data:', error));
}

  render() {
    const { tour } = this.state;
        if (!tour) {
            return <div>Data not found</div>;
        }

        const vtour = tour.Text.split('.').map((sentence, index) => (
            <li className="tour-list-item" key={index}>{sentence.trim()}</li>
        ));
        const Ttitle = tour.Title;
    return (
      <div className="vtour">
        <h1 id="title"> {Ttitle}</h1>
        <p id="s1">{vtour}</p>

        <a-scene>
          <a-sky id="panorama" src={sence}></a-sky>
         <a-plane position="-10 -4 -10" rotation="0 0 0" width="2" height="1" color="#00CCFF"
                 text="value: Change Image; color: black; align: center;"
                 class="clickable"
                 event-set__click="_event: click; _target: #panorama" src={sence2}>
         </a-plane>
         <a-text value="Click  to change the next sence" position="-7 3 -4" align="center"></a-text>
        </a-scene>
      </div>
    );
  }
}

