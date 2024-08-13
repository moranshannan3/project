import React, { Component } from "react";
import '../style/library.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

class Library extends Component {
    constructor(props) {
        super(props);
        this.sen = null;
        this.error = null;

        this.fetchPageData(6);
    }

    fetchPageData(pageID) {
        fetch(`http://localhost:3002/pages/${pageID}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                this.sen = data;
                this.forceUpdate(); // מבצע רענון של הקומפוננט כדי לעדכן את התצוגה
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.error = error;
                this.forceUpdate();
            });
    }

    renderBooks() {
        const books = [
            { name: "السبيل إلى التوحيد", url: "https://mouwahidoundruze.gov.lb/public/uploads/files/3848_Al Sabil Liltawhid.pdf" },
            { name: "علامة المؤمن", url: "https://mouwahidoundruze.gov.lb/public/uploads/files/7633_علامات المؤمن الملف الاساسي.pdf" },
            { name: "الدليل إلى التوحيد", url: "https://mouwahidoundruze.gov.lb/public/uploads/files/4777_الدليل الى التوحيد 1-6-2019.pdf" },
            { name: "تاريخ المسلمين الموحدين الدروز", url: "https://ia803102.us.archive.org/13/items/ktp2019-bskn11521/ktp2019-bskn11521.pdf" },
            { name: "הדרוזים בין לאום למדינה", url: "https://ch-strategy.hevra.haifa.ac.il/fullbooks/20110208/files/assets/common/downloads/publication.pdf" },
            { name: "הדרוזים בין גאוגרפיה וחברה", url: "https://ch-strategy.haifa.ac.il/fullbooks/20110201/files/assets/common/downloads/publication.pdf" },
            { name: "הדרוזים", url: "https://www.maarachot.idf.il/media/csoj5yks/2-%D7%93%D7%A8%D7%95%D7%96%D7%99%D7%9D.pdf" },
            { name: "הדרוזים בישראל", url: "https://www.wgalil.ac.il/wp-content/uploads/2022/02/Druze.pdf" },
            { name: "Druze Identity, Religion", url: "https://www.shaanan.ac.il/wp-content/uploads/2018/08/Laor/Ktav_Et/Shnaton/K-15/15-14%20dana.pdf" },
            { name: "Sufism In The Druze Faith", url: "http://www.druzeheritage.org/popups/6.pdf" },
            { name: "Druze Women and Gender in Druze Society", url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/97a5dd39-7b04-442e-935e-8a83a1e49d80/content" },
            { name: "Druze Reincarnation Narratives", url: "https://www.peterlang.com/free_download?document_id=1137102&amp;product_form=ebook&amp;publication_type=pdf" },
        ];

        return books.map((book, index) => (
            <div key={index} className={`book${index + 1}`}>
                <div className={`book${index + 1}_name`}>{book.name}</div>
                <div className={`book${index + 1}_cover`} />
                <div className={`book${index + 1}_pdf`}>
                    <span><a href={book.url} target="_blank" rel="noopener noreferrer">READ BOOK</a></span>
                </div>
            </div>
        ));
    }

    renderVideos() {
        const videos = [
            { name: "האופה הדרוזי", url: "https://youtu.be/6zqz85xU6Cg?feature=shared" },
            { name: "من هم الدروز؟", url: "https://youtu.be/PLwpepYjcJY?feature=shared" },
            { name: "Who are the Druze?", url: "https://youtu.be/3JYnvauAzSQ?feature=shared" },
        ];

        return videos.map((video, index) => (
            <div key={index} className={`vid${index + 1}`}>
                <div className={`vid${index + 1}_name`}>{video.name}</div>
                <div className={`vid${index + 1}_cover`} />
                <div className={`vid${index + 1}_v`}>
                    <span><a href={video.url} target="_blank" rel="noopener noreferrer">WATCH VIDEO</a></span>
                </div>
            </div>
        ));
    }

    render() {
        if (this.error) {
            return <div>Error: {this.error.message}</div>;
        }

        if (!this.sen) {
            return <div>Data not found</div>;
        }

        const { Title: T1 } = this.sen;

        return (
            <div>
                <Header />
                <div className="lib">
                    <h1 id="first">{T1}</h1>
                    <div className="BOOKS">
                        {this.renderBooks()}
                        {this.renderVideos()}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Library;
