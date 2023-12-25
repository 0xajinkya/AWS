import { SESClient, GetTemplateCommand, ListTemplatesCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
	TemplateName: "JSTempV3",
};

const run = async () => {
	try {
		// const res = await sesClient.send(new GetTemplateCommand(params));
		const res = await sesClient.send(new ListTemplatesCommand({}));
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
run();
