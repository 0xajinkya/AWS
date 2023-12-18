const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    OldPassword: "Ajinkya@513",
    NewPassword: "Ajinkya@5131"
}

iam.changePassword(params, (err, data) => console.log(err ?? data));