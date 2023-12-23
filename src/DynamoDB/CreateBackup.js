const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();

const params = {
    BackupName: "employee-backup",
    TableName: "employee"
}

dynamodb.createBackup(params, (err, data) => console.log(err ?? data))