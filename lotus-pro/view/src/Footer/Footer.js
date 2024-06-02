import { Component } from "react";
import './Footer.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainT: ""
        };
    }

    componentDidMount() {
        fetch('http://localhost:3002/menuJson/footer')
            .then(response => response.json())
            .then(data => {
                this.setState({ mainT: data.mainT });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div className="footer">
                <h5 id="footer1">{this.state.mainT}</h5>
            </div>
        );
    }
}
