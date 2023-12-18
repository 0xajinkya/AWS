const { IAMClient, GetGroupCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    GroupName: "S3Admins",
};

const command = new GetGroupCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));