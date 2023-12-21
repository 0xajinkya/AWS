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
