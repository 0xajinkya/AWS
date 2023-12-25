import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
	IdentityType: "EmailAddress"
};

const run = async () => {
	try {
		const res = await sesClient.send(new ListIdentitiesCommand(params));
		console.log(res);
	} catch (error) {
		console.log(data);
	}
};
run();
