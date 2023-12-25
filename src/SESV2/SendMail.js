const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

const ses = new AWS.SES();

const params = {
    Source: "kahaneajinkya051@gmail.com",
    Destination: {
        "ToAddresses": ["kahaneajinkya051@gmail.com"],
        "CcAddresses": ["kahaneajinkya051@gmail.com"],
    },
    ReplyToAddresses: ["kahaneajinkya051@gmail.com"],
    Template: "JSTemp",
    TemplateData: '{"replace": "value"}'
};

ses.sendTemplatedEmail(params, (err, data) => console.log(err ?? data));