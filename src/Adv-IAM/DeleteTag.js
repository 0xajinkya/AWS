import { IAMClient, UntagUserCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const user_name = "Prathmesh";

const tag_keys = ["Department", "Project"];

/**
 * Removes tags from a user asynchronously
 * @param {string} user_name - The user's name to remove tags from.
 * @param {string[]} tag_keys - The tag keys to remove from the user. 
 * @returns {Promise} - A promise resolving with the API response.
 * @description
 - Creates an UntagUserCommand with the provided user name and tag keys.
 - Sends the command to the API client asynchronously.
 - Handles errors by logging them to the console.
 - Logs the successful response to the console.
*/
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