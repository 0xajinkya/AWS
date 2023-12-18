const { IAMClient, DetachGroupPolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
  GroupName: "RDSAdmins",
  PolicyArn: "arn:aws:iam::aws:policy/AmazonRDSFullAccess",
};

const command = new DetachGroupPolicyCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));
