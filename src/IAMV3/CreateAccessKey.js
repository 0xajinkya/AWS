const { IAMClient, CreateAccessKeyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    UserName: "John1"
};

const command = new CreateAccessKeyCommand(input);

iamClient.send(command, (err, data) => console.log(err??data));