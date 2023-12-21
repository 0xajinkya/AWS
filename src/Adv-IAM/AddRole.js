import { IAMClient, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const instance_profile_name = "MyJSProfile";
const role_name = "MyJSRole";

const addRole = async() => {
    try {
        const command = new AddRoleToInstanceProfileCommand({
            InstanceProfileName: instance_profile_name,
            RoleName: role_name
        });

        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

addRole();