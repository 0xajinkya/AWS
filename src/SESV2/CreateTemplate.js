const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

const ses = new AWS.SES();

const params = {
    Template: {
        "TemplateName": "JSTemp",
        "SubjectPart": "AWS Course with JS & NodeJS",
        "TextPart": "Thanks for buying the course",
        "HtmlPart": "Thanks for buying the course"
    }
};

ses.createTemplate(params, (err, data) => console.log(err ?? data));