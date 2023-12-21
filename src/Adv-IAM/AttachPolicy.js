import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const role_name = "MyJSRole";

const policy_name = "MyJSRole"; //Can be diff than role_name, but coz of my sillines in CreatePolicy.js, bear with this now

const attachPolicy = async() => {
    try {
        const command = new AttachRolePolicyCommand({
            RoleName: role_name,
            PolicyArn: "arn:aws:iam::432076235137:policy/MyJSRole"
        });

        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

attachPolicy();