const AWS = require('aws-sdk');

AWS.config.update({"region": "us-east-1"})
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: 'employee',
    Item: {
        'id': {
            'N': "3"
        },
        'name': {
            'S': 'vailly'
        },
        'age': {
            'N': '23'
        }
    }
};

dynamodb.putItem(params, (err, data) => console.log(err ?? data))

// $env:AWS_SDK_LOAD_CONFIG=1
