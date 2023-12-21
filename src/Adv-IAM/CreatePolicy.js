import { CreatePolicyCommand, IAMClient } from "@aws-sdk/client-iam";

const client = new IAMClient();

const policy_name = "MyJSRole";

const policy_doc = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::buc-123-ket/*"
        }
    ]
};

export const createIAMPolicy = async() => {
    try {
        const command = new CreatePolicyCommand({
            PolicyName: policy_name,
            PolicyDocument: JSON.stringify(policy_doc)
        })
        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

createIAMPolicy();