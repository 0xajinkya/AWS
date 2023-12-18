const AWS = require("aws-sdk");

const iam = new AWS.IAM();

iam.listUsers((err, data) => {
    console.log(err ?? data);
});