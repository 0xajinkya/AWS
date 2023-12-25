import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const sesClient = new SESClient({ region: "us-east-1", credentials: fromIni() });

const params = {
    Source: "kahaneajinkya051@gmail.com",
    Destination: {
        "ToAddresses": ["kahaneajinkya051@gmail.com"],
        "CcAddresses": ["kahaneajinkya051@gmail.com"],
    },
    ReplyToAddresses: ["kahaneajinkya051@gmail.com"],
    Template: "JSTempV31",
    TemplateData: '{"replace": "value"}'
};

const run = async () => {
	try {
		const res = await sesClient.send(new SendTemplatedEmailCommand(params));
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
run();
