const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    UserName: "Prathmesh",
    GroupName: "S3Admins"
}

iam.addUserToGroup(params, (err, data) => console.log(err ?? data));