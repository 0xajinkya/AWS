const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    GroupName: "S3Admins",
    PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
};

iam.attachGroupPolicy(params, (err, data) => console.log(err, data));