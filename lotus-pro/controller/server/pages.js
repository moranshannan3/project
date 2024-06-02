//pages.js
const pages = [
    {padeId:1,
    pageName: "first",
    url:"/ ",
    title: "Druze Journey",
    text:  "Voyage into Faith and Tradition"},

    {padeId:2,
    pageName: "mainpage",
    url:"/ ",
    text: ["Welcome to our website, where Druze culture, history, and tradition converge",
    "Join us on a fascinating journey to the heart of the Druze community"],
    menuId:[1, 2, 3, 4, 5]},

    {pageId:3,
    pageName:"about us",
    title:"About Us",
    icon:"./img/aboutus.png",
    text:["Have you ever found yourself in a situation where you were interested in the Druze religion but did not know where to look for information?", 
    "Here in Druze Journey we take you on a fascinating journey to learn about the foundations of Druze society. provide an easy and comprehensive access to relevant information on the culture, history, faith, heritage and so many other things.",
    "You can visit our library to enlightens your knowledge, participate in FAQ page, get updated in our latest news and main events.",
    "The highlight of all is the virtual tour on The mosque and Tomb of the Prophet Shua’yb in Israel.",
    "Enjoy your stay with us"]},

    {pageId: 4,
    pageName: "FAQ:Frequently Asked Questions",
    title: "FAQ: Frequently Asked Questions",
    buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},

    {pageId:5,
    pageName:"add your question",
    title: "Add Your Question",
    url: "/ ",
    text: ["Do you have a question and didn't find an answer?",
    "This is the opportunity to overwhelm it and we will make sure that you get a correct and reliable answer"],
    "formId": 1},

    {pageId: 6,
    pageName:"library",
    title: "The Library",
    text:"You are invited to visit our library and go through the books to further enrich your knowledge about the Druze.",
    specialElements:" "},

    {pageId:7,
    pageName:"vtour",
    title:"Virtual Tour",
    url: "/ ",
    text:["ladies and gentlemen please fasten your belts cause now are about to arrive to The mosque and Tomb of the Prophet Shua’yb in Israel.",
    "We wish you to enjoy the fascinating tour."],
    specialElements: " "},   

    {pageId:8,
    pageName: "cocntact us",
    title: "Contact Us",
    url: "/ ",
    text: ["want to get in touch?" ,"we would love to hear from you"],
    formId: 2},

];
module.exports = {pages};
