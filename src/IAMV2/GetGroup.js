const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    GroupName: "S3Admins",
};

iam.getGroup(params, (err, data) => console.log(err ?? data));