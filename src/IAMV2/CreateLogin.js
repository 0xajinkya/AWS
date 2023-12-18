const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    Password: "Ajinkya@5131",
    PasswordResetRequired: false,
    UserName: "Ajinkya"
};

iam.createLoginProfile(params, (err, data) => console.log(err ?? data));