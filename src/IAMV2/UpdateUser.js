const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    NewUserName: "Prathmesh",
    UserName: "updated",
};

iam.updateUser(params, (err, data) => {
    console.log(err ?? data);
});