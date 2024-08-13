import { Component } from "react";
import './Footer.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainT: null
        };
    }

    componentDidMount() {
        const pageID = -2; 
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                   mainT: data
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { mainT } = this.state;
        if (!mainT) {
            return <div>Data not found</div>;
        }

        const footer = mainT.Text;
        return (
            <div className="footer">
                <h5 id="footer1">{footer}</h5>
            </div>
        );
    }
}
