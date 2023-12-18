const { IAMClient, ListPoliciesCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const input = {
  Scope: "Local",
  //         Scope: "AWS",
  // Scope: "All"
};

const command = new ListPoliciesCommand(input);

iamClient.send(command, (err, data) => console.log(err ?? data));
