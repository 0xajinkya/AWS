import { CreateInstanceProfileCommand, IAMClient } from "@aws-sdk/client-iam";

const client = new IAMClient();

const instance_profile_name = "MyJSProfile";

/**
 * Creates an instance profile asynchronously
 * @param {Object} client - The AWS SDK client object. 
 * @returns {Promise} - A promise resolving with the instance profile creation response.
 * @description
 - Tries to create an instance profile with the provided name using the CreateInstanceProfileCommand.
- Awaits the response and logs it if successful.
- Catches any errors and logs them.
*/
const createInsProfile = async() => {
    try {
        const command = new CreateInstanceProfileCommand({
            InstanceProfileName: instance_profile_name
        });

        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

createInsProfile();;