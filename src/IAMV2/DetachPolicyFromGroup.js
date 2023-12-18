const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    GroupName: "RDSAdmins",
    PolicyArn: "arn:aws:iam::aws:policy/AmazonRDSFullAccess"
}

iam.detachGroupPolicy(params, (err, data) => console.log(err ?? data));