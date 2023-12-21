
import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const role_name = "MyJSRole";

const trust_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
};

/**
 * Creates an IAM role.
 * @param {object} client - The IAM client.
 * @returns {object} res - The response from creating the role.
 * @description
 *   - Creates an IAM role with the provided role name and trust policy.
 *   - Sends the CreateRole command to the IAM client and awaits the response.
 *   - Logs the response or any error from creating the role.
 */
async function createIAMRole() {
    try {
        const command = new CreateRoleCommand({
            RoleName: role_name,
            AssumeRolePolicyDocument: JSON.stringify(trust_policy)
        });
        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

createIAMRole();