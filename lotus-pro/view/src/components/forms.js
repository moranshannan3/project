let forms =[
    {formId: 1,
     formName: "Add Your Question",
     text: ["Do you have a question and didn't find an answer?",
     "This is the opportunity to overwhelm it and we will make sure that you get a correct and reliable answer"],
     input:[
        {label:"email",
         type: "text",
         placeholder: "write your email",
         required: "True"
        },
        {label:"add your question",
         type: "text",
         placeholder: "add your question",
         required: "True"
        }],
        submit_button_label: "SUBMIT",
        submit_url: "/ "
    },
    
    {formId: 2,
        formName: "Contact Us",
        text: ["want to get in touch?" ,"we would love to hear from you"],
    input:[
        {label:"Name",
         type:"text",
         placeholder:"Name", 
         required:"True"
        },
        {label:"Phone number",
         type: "text",
         placeholder:"Phone Number",
         required: "False",
        },
        {label:"email",
        type: "text",
        placeholder: "E-mail",
        required: "True"
        },
        {label:"the topic",
         type: "text",
         placeholder:"Add Your Massege",
         required: "True"
        }],
        submit_button_labe2: "SUBMIT",
        submit_url: "/ "
    },
    ];
export default forms;