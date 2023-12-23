const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();


const params = {
    Key: {
        "id": {
            "N": "1"
        }
    },
    TableName: "employee"
};

dynamodb.getItem(params, (err, data) => console.log(data));