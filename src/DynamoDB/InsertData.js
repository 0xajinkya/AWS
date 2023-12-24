const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";
const year = 2022;
const title = "Hell is here";

const params = {
	TableName: table,
	Item: {
		year: year,
		title: title,
		info: {
			plot: "This is new movie",
			rating: 2
		}
	}
};
docClient.put(params, (err, data) => console.log(err ?? `Movie added:  ${params.Item.title}`));
