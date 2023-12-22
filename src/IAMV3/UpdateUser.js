
const { IAMClient, UpdateUserCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    NewUserName: "Prathmesh",
    UserName: "Prath",
};

const command = new UpdateUserCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));