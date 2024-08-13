import React, { Component } from "react";
import '../style/Vtour.css';
import 'pannellum/build/pannellum.css';
import sence from '../vrtour/ai0.jpg';
import sence2 from '../vrtour/square.jpg';
import sence3 from '../vrtour/el3en.jpg';
import sence4 from '../vrtour/rtt.jpg';
import sence5 from '../vrtour/back.jpg';
import sence6 from '../vrtour/ai.jpg';
import sence7 from '../vrtour/ai2.jpg';
import sence8 from '../vrtour/ai8.jpg';
import sence9 from '../vrtour/ai30.jpg';
import sence10 from '../vrtour/ai31.jpg';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: null,
      currentScene: 'scene1',
      scenes: {
        scene1: {
          panorama: sence,
          hotSpots: [
            {
              pitch: -45,
              yaw: 20,
              type: 'scene',
              text: 'start',
              sceneId: 'scene2',
              cssClass: 'custom-hotspot'
            }
          ]
        },
        scene2: {
          panorama: sence2,
          hotSpots: [
            {
              pitch: 8,
              yaw: -18,
              type: 'scene',
              text: 'go to ألعين',
              sceneId: 'scene3',
              cssClass: 'custom-hotspot'
            }
          ]
        },
        scene3: {
          panorama: sence3,
          hotSpots: [
            {
              pitch: 8,
              yaw: 127,
              type: 'scene',
              text: 'Go to Scene 4',
              sceneId: 'scene4',
              cssClass: 'custom-hotspot'
            }
          ]
        },
        scene4: {
          panorama: sence4,
          hotSpots: [
            {
              pitch: 18,
              yaw: -130,
              type: 'scene',
              text: 'Go  to ألساحة الخلفيه',
              sceneId: 'scene5',
              cssClass: 'custom-hotspot'
            }
          ]
        },
        scene5: {
          panorama: sence5,
          hotSpots: [
            {
              pitch: 1,
              yaw: 100,
              type: 'scene',
              text: 'Go to الساحة ألامامية',
              sceneId: 'scene6',
              cssClass: 'custom-hotspot'
            }
          ]
        },
        scene6: {
          panorama: sence6,
          hotSpots: [
            {
              pitch: -50,
              yaw: 35,
              type: 'scene',
              text: 'Go back start',
              sceneId: 'scene1',
              cssClass: 'custom-hotspot'
            },
            {
              pitch: -17,
              yaw: 50,
              type: 'scene',
              text: 'Go to النافوره',
              sceneId: 'scene7',
              cssClass: 'custom-hotspot'
            },
            {
              pitch: -20,
              yaw: 150,
              type: 'scene',
              text: 'Go to مطل مقابل بحرية طبريا',
              sceneId: 'scene8',
              cssClass: 'custom-hotspot'
            },
            {
              pitch: -25,
              yaw: 15,
              type: 'scene',
              text: 'Go to غرفة الضريح',
              sceneId: 'scene9',
              cssClass: 'custom-hotspot'
            },
          ]
        },
        scene7: {
          panorama: sence7,
          hotSpots: [
            {
              pitch: -30,
              yaw: 1,
              type: 'scene',
              text: 'Go back to الساحة',
              sceneId: 'scene6',
              cssClass: 'custom-hotspot'
            }
          ]
        },  
        scene8: {
          panorama: sence8,
          hotSpots: [
            {
              pitch: -30,
              yaw: 1,
              type: 'scene',
              text: 'Go back to الساحه',
              sceneId: 'scene6',
              cssClass: 'custom-hotspot'
            }
          ]
        },  
        scene9: {
          panorama: sence9,
          hotSpots: [
            {
              pitch: -30,
              yaw: 1,
              type: 'scene',
              text: 'Go back to الساحه',
              sceneId: 'scene6',
              cssClass: 'custom-hotspot'
            },
            {
              pitch:-25,
              yaw:-77,
              type:'scene',
              text:'go to داخل الضريح',
              sceneId: 'scene10',
              cssClass: 'custom-hotspot'
            }
          ]
        },
        scene10: {
          panorama: sence10,
          hotSpots: [
            {
              pitch: -30,
              yaw: 1,
              type: 'scene',
              text: 'Go back to أمام الضريح',
              sceneId: 'scene9',
              cssClass: 'custom-hotspot'
            }
          ]
        },    
        
      }
    };
    this.viewer = null;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const pageID = 7;
    fetch(`http://localhost:3002/pages/${pageID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          tour: data
        }, () => {
          this.initializePannellum();
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  initializePannellum() {
    try {
      console.log('Checking for pannellum and container');
      if (window.pannellum && document.getElementById('panorama-container')) {
        console.log('Pannellum and container found');
        this.viewer = window.pannellum.viewer('panorama-container', {
          default: {
            firstScene: 'scene1',
            sceneFadeDuration: 1000,
          },
          scenes: {
            scene1: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene1.panorama,
              hotSpots: this.state.scenes.scene1.hotSpots,
              autoLoad: true
            },
            scene2: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene2.panorama,
              hotSpots: this.state.scenes.scene2.hotSpots,
              autoLoad: true
            },
            scene3: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene3.panorama,
              hotSpots: this.state.scenes.scene3.hotSpots,
              autoLoad: true
            },
            scene4: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene4.panorama,
              hotSpots: this.state.scenes.scene4.hotSpots,
              autoLoad: true
            },
            scene5: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene5.panorama,
              hotSpots: this.state.scenes.scene5.hotSpots,
              autoLoad: true
            },
            scene6: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene6.panorama,
              hotSpots: this.state.scenes.scene6.hotSpots,
              autoLoad: true
            },
            scene7: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene7.panorama,
              hotSpots: this.state.scenes.scene7.hotSpots,
              autoLoad: true
            },
            scene8: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene8.panorama,
              hotSpots: this.state.scenes.scene8.hotSpots,
              autoLoad: true
            },
            scene9: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene9.panorama,
              hotSpots: this.state.scenes.scene9.hotSpots,
              autoLoad: true
            },
            scene10: {
              type: 'equirectangular',
              panorama: this.state.scenes.scene10.panorama,
              hotSpots: this.state.scenes.scene10.hotSpots,
              autoLoad: true
            }
          }
        });
      } else {
        console.error('Pannellum is not available on the window object or the container is missing');
      }
    } catch (error) {
      console.error('Error initializing Pannellum:', error);
    }
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
      <div>
        <Header></Header>
      <div className="vtour">
        <h1 id="title">{Ttitle}</h1>
        <p id="s1">{vtour}</p>

        <div id="panorama-container" style={{ width: '100%', height: '500px', border: '1px solid black' }}></div>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}
