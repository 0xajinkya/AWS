import { IAMClient, TagUserCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const user_name = "Prathmesh";

const tags = [
	{
		Key: "Department",
		Value: "HR"
	},
	{
		Key: "Project",
		Value: "Onboarding"
	}
];

/**
 * Tags a user with the provided tags
 * @param {string} user_name - The username to tag.
 * @param {string[]} tags - The tags to apply to the user. 
 * @returns {Promise} - A promise resolving with the response from the API.
 * @description
 - Creates a TagUserCommand with the provided username and tags.
 - Sends the command to the client and awaits the response. 
 - Logs the response or any errors to the console.
*/
const addTagsToUser = async () => {
	try {
		const command = new TagUserCommand({
			UserName: user_name,
			Tags: tags
		});
		const res = await client.send(command);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
addTagsToUser();
