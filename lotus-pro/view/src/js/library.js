import React, { Component } from "react";
import '../style/library.css';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:3002/pages/library')
            .then(response => response.json())
            .then(data => {
                this.setState({ page: data, loading: false });
            })
            .catch(error => {
                this.setState({ error: 'Error fetching page', loading: false });
            });
    }

    render() {
        const { page, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        if (!page) {
            return <div>Page not found</div>;
        }

        return (
            <div className="lib">
                <h1 id="first">{page.title}</h1>
                <p id="sen"><strong>{page.text}</strong></p>
            </div>
        );
    }
}
export default Library;
