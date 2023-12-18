// const AWS = require("aws-sdk");

// const iam = new AWS.IAM();

// const params = {
//     GroupName: "S3Admins",
//     PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
// };

// iam.attachGroupPolicy(params, (err, data) => console.log(err, data));

const { IAMClient, AttachGroupPolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    GroupName: "S3Admins",
    PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
};

const command = new AttachGroupPolicyCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));