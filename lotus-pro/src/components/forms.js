let forms =[
{formId: 1,
 name: "Add Your Question",
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
 name: "Contact Us",   
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
]
export default forms;