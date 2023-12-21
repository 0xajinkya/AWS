import { IAMClient, ListUserTagsCommand, ListUsersCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

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
