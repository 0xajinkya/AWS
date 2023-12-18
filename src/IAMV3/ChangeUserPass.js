const { IAMClient, ChangePasswordCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    OldPassword: "Ajinkya@5131",
    NewPassword: "Prathmesh@aws2023"
};

const command = new ChangePasswordCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));