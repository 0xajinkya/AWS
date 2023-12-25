const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

const ses = new AWS.SES();

const params = {
    IdentityType: "EmailAddress"
};

ses.listIdentities(params, (err, data) => console.log(err ?? data));