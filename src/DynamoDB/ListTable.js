const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();

dynamodb.listTables((err, data) => console.log(err ?? data))