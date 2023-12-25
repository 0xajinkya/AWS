import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const sesClient = new SESClient({ region: "us-east-1", credentials: fromIni() });

const params = {
    Destination: {
        "ToAddresses": ["kahaneajinkya051@gmail.com"]
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "Thanks for buying the course"
            },
            Text: {
                Charset: "UTF-8",
                Data: "AWS Course with JS & Node JS"
            }
        },
        Subject: {
            Charset: "UTF-8",
            Data: "AWS Course Status"
        },
    },
    Source: "kahaneajinkya051@gmail.com"
};

const run = async () => {
	try {
		const res = await sesClient.send(new SendEmailCommand(params));
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
run();
