const { IAMClient, CreateLoginProfileCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    Password: "Prathmesh@aws2023",
    PasswordResetRequired: false,
    UserName: "John1"
};

const command = new CreateLoginProfileCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));