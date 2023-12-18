const { IAMClient, DeletePolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
    PolicyName: "newuserfullpolicy1",
    PolicyArn: "arn:aws:iam::432076235137:policy/newuserfullpolicy1"
};

const policyCommand = new DeletePolicyCommand(input);

iamClient.send(policyCommand, (err, data) => {
    console.log(err??data)
})