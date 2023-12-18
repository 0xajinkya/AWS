const { IAMClient, DeleteLoginProfileCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    Password: "Prathmesh@aws2023",
    UserName: "John1"
};

const command = new DeleteLoginProfileCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));