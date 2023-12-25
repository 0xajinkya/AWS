const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

const ses = new AWS.SES();

const params = {
    EmailAddress: "kahaneajinkya051@gmail.com"
};

ses.verifyEmailAddress(params, (err, data) => console.log(err ?? data));