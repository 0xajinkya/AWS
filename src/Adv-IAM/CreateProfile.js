import { CreateInstanceProfileCommand, IAMClient } from "@aws-sdk/client-iam";

const client = new IAMClient();

const instance_profile_name = "MyJSProfile";

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