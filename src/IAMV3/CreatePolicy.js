const { IAMClient, CreatePolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const policy_doc = {
        "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}

const input = {
    PolicyDocument: JSON.stringify(policy_doc),
    PolicyName: "newuserfullpolicy1",
    Description: "This is my new full access policy"
};

const policyCommand = new CreatePolicyCommand(input);

iamClient.send(policyCommand, (err, data) => {
    console.log(err??data)
})