const { IAMClient, DeleteAccessKeyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    UserName: "John1",
    AccessKeyId: "AKIAWJGOAEGAV6MSDPFE"
};

const command = new DeleteAccessKeyCommand(input);

iamClient.send(command, (err, data) => console.log(err??data));