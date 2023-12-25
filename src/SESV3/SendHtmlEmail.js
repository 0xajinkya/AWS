import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const sesClient = new SESClient({ region: "us-east-1", credentials: fromIni() });

const html_contents =
	"<html>" +
	"<h1 style='text-align: center'>AWS with JS and Node JS</h1>" +
	"<p style='color: red'>Welcome to the course and thanks for buying</p>" +
	"</html>";

const params = {
	Destination: {
		ToAddresses: ["kahaneajinkya051@gmail.com"]
	},
	Message: {
		Body: {
			Html: {
				Charset: "UTF-8",
				Data: html_contents
			}
		},
		Subject: {
			Charset: "UTF-8",
			Data: "AWS Course"
		}
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