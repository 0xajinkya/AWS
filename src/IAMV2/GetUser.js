const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    UserName: "Ajinkya"
};

iam.getUser(params, (err, data) => console.log(err ?? data));