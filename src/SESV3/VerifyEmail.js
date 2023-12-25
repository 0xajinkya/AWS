import { SESClient, VerifyEmailAddressCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
	EmailAddress: "kahaneajinkya051@gmail.com"
};

const run = async () => {
	try {
		const res = await sesClient.send(new VerifyEmailAddressCommand(params));
		console.log(res);
	} catch (error) {
		console.log(data);
	}
};
run();
