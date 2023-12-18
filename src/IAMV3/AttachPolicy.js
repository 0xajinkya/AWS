const { IAMClient, AttachUserPolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
        PolicyArn: "arn:aws:iam::432076235137:policy/newuserfullpolicy",
    UserName: "Prathmesh"
}

const command = new AttachUserPolicyCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));