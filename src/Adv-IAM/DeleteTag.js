import { IAMClient, UntagUserCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const user_name = "Prathmesh";

const tag_keys = ["Department", "Project"];

const removetags = async() => {
    try {
        const command = new UntagUserCommand({
            UserName: user_name,
            TagKeys: tag_keys
        });
        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

removetags();