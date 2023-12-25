import { SESClient, CreateTemplateCommand } from "@aws-sdk/client-ses";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const sesClient = new SESClient({ region: "us-east-1", credentials: fromIni() });


const params = {
	Template: {
        "TemplateName": "JSTempV31",
        "SubjectPart": "AWS Course with JS & NodeJS",
        "TextPart": "Thanks for buying the course",
        "HtmlPart": "Thanks for buying the course"
    }
};

const run = async () => {
	try {
		const res = await sesClient.send(new CreateTemplateCommand(params));
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
run();
