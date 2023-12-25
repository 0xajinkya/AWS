const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

const ses = new AWS.SES();

const params = {
    TemplateName: "JSTemp"
};

//For Getting A Specified Template
// ses.getTemplate(params, (err, data) => console.log(err ?? data))

//For Getting All Template
ses.listTemplates((err, data) => console.log(err, data));