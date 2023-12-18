const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
  UserName: "Prathmesh",
  GroupName: "S3Admins1",
};

const command = new AddUserToGroupCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));
