const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB();

const params = {
	TableName: "Movies",
	KeySchema: [
		{
			AttributeName: "year",
			KeyType: "HASH"
		},
		{
			AttributeName: "title",
			KeyType: "RANGE"
		}
	],
	AttributeDefinitions: [
		{
			AttributeName: "year",
			AttributeType: "N"
		},
		{
			AttributeName: "title",
			AttributeType: "S"
		}
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 4,
		WriteCapacityUnits: 4
	}
};

dynamodb.createTable(params, (err, data) => console.log(err ?? data));
