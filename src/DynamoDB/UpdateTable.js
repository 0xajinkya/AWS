const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();

const params = {
    ProvisionedThroughput: {
        ReadCapacityUnits: 3,
        WriteCapacityUnits: 3
    },
    TableName: "employee"
}

dynamodb.updateTable(params, (err, data) => console.log(err ?? data));