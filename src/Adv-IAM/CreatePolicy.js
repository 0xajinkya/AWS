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

/**
 * Creates a policy asynchronously
 * @param {Object} policy_name - Name of the policy to create. 
 * @param {Object} policy_doc - Policy document object.
 * @returns {Object} res - Response from creating the policy.
 * @description
 - Creates a CreatePolicyCommand with the policy name and document.
- Sends the command to the client asynchronously and awaits the response.
- Logs the response or any error to the console.
*/
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