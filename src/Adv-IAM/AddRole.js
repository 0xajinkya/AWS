import { IAMClient, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const instance_profile_name = "MyJSProfile";
const role_name = "MyJSRole";

/**
 * Adds a role to an instance profile.
 * @param {string} instance_profile_name - Name of the instance profile to add the role to.
 * @param {string} role_name - Name of the IAM role to add to the instance profile. 
 * @returns {Promise} - Promise resolved when role is added to instance profile.
 * @description
 *   - Creates an AddRoleToInstanceProfileCommand with the provided instance profile and role names.
 *   - Sends the command to the IAM client and awaits the response.
 *   - Logs the response or any errors.
 */
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