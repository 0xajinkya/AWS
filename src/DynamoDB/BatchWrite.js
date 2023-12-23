const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB();

const params = {
	RequestItems: {
		employee: [
			{
				PutRequest: {
					Item: {
						id: {
							N: "4"
						},
						name: {
							S: "test"
						},
						age: {
							N: "23"
						}
					}
				}
			},
			{
				PutRequest: {
					Item: {
						id: {
							N: "5"
						},
						name: {
							S: "test1"
						},
						age: {
							N: "24"
						}
					}
				}
			},
			{
				PutRequest: {
					Item: {
						id: {
							N: "6"
						},
						name: {
							S: "test6"
						},
						age: {
							N: "25"
						}
					}
				}
			}
		]
	}
};

dynamodb.batchWriteItem(params, (err, data) => console.log(err ?? data));