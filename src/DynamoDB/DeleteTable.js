const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB();

const params = {
	TableName: "employee"
};

dynamodb.deleteTable(params, (err, data) => console.log(err ?? data));