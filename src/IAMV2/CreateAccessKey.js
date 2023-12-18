const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    UserName: "Prathmesh"
};

iam.createAccessKey(params, (err, data) => console.log(err ?? data));