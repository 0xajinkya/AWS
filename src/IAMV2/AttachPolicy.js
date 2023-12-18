const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    PolicyArn: "arn:aws:iam::432076235137:policy/newuserfullpolicy",
    UserName: "Prathmesh"
};

iam.attachUserPolicy(params, (err, data) => console.log(err ?? data));