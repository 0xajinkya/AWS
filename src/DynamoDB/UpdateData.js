const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";

const year = 2022;
const title = "Hell is here";

const params = {
	TableName: table,
	Key: {
		year: year,
		title: title
	},
	UpdateExpression: "set info.rating=:r, info.plot=:p, info.actors=:a",
	ExpressionAttributeValues: {
		":r": 5.5,
		":p": "This is updated plot",
		":a": ["First", "Second", "Third"]
	}
};

docClient.update(params, (err, data) => console.log(err ?? data));
