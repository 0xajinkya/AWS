const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    GroupName: "S3Admins"
}

iam.createGroup(params, (err, data) => console.log(err ?? data));