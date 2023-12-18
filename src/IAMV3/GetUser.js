const { IAMClient, GetUserCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
        UserName: "Ajinkya"
};

const command = new GetUserCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));