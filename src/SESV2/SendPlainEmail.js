const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

const ses = new AWS.SES();

const params = {
    Destination: {
        "ToAddresses": ["kahaneajinkya051@gmail.com"]
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "Thanks for buying the course"
            },
            Text: {
                Charset: "UTF-8",
                Data: "AWS Course with JS & Node JS"
            }
        },
        Subject: {
            Charset: "UTF-8",
            Data: "AWS Course Status"
        },
    },
    Source: "kahaneajinkya051@gmail.com"
};

ses.sendEmail(params, (err, data) => console.log(err ?? data));