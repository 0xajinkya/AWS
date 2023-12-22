import { IAMClient, ListUserTagsCommand, ListUsersCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

/**
 * Asynchronously lists users and their tags from an AWS account
 * @param {void} - No arguments required.
 * @returns {void} - Does not return a value.
 * @description
 - Executes a ListUsersCommand to retrieve a list of users from the AWS account.
- Loops through each user returned and executes a ListUserTagsCommand to retrieve the tags for that user. 
 - Prints the tags to the console for debugging purposes.
- Catches any errors and prints them to the console.
*/
const listUsersTags = async () => {
	try {
		const listCommand = new ListUsersCommand({});
		const listUserRes = await client.send(listCommand);

		for (const user of listUserRes.Users) {
			const userName = user.UserName;
			const listUserTagsCommand = new ListUserTagsCommand({
				UserName: userName
			});
			const listUserTags = await client.send(listUserTagsCommand);
			console.log(listUserTags.Tags);
		}
	} catch (error) {
		console.log(error);
	}
};

listUsersTags();
