const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        "employee": {
            Keys: [
                {
                    "id": {
                        "N": "2"
                    }
                },
                {
                    "id": {
                        "N": "4"
                    }
                }
            ]
        }
    }
}

dynamodb.batchGetItem(params, (err, data) => console.log(err ?? data));