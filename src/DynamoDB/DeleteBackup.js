const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();


const params = {
    BackupArn: "arn:aws:dynamodb:us-east-1:432076235137:table/employee/backup/01703356372014-10a8c4dc",
}

dynamodb.deleteBackup(params, (err, data) => console.log(err ?? data));