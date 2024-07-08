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
        const pageID = 6; 
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    sen: data
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { sen } = this.state;
        if (!sen) {
            return <div>Data not found</div>;
        }

        const library = sen.Text;
        const T1 = sen.Title;

        return (
            <div className="lib">
                <h1 id="first">{T1}</h1>
                <p id="sen"><strong>{library}</strong></p>
              <div className="BOOKS">  
                  <div className="book1">
                     <div className="book1_name">السبيل إلى التوحيد</div> 
                     <div  className="book1_cover" />
                     <div className="book1_pdf">
                     <span><a href="https://mouwahidoundruze.gov.lb/public/uploads/files/3848_Al Sabil Liltawhid.pdf" target="_blank">OPEN PDF</a></span>
                     </div>
                  </div>

                  <div className="book2">
                     <div className="book2_name"> علامة المؤمن</div> 
                     <div  className="book2_cover" />
                     <div className="book2_pdf">
                     <span><a href="https://mouwahidoundruze.gov.lb/public/uploads/files/7633_علامات المؤمن الملف الاساسي.pdf" target="_blank">OPEN PDF </a></span>
                     </div>
                  </div>

                  <div className="book3">
                     <div className="book3_name"> الدليل إلى التوحيد</div> 
                     <div  className="book3_cover" />
                     <div className="book3_pdf">
                     <span> <a href="https://mouwahidoundruze.gov.lb/public/uploads/files/4777_الدليل الى التوحيد 1-6-2019.pdf" target="_blank">OPEN PDF</a>
                     </span>
                     </div>
                  </div>
               </div>
            </div>
        );
    }
}
export default Library;
