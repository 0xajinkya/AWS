const AWS = require("aws-sdk");
AWS.config.update({"region": "us-east-1"})

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";
const year = 2022;
const title = "Hell is here";

const params = {
    TableName: table,
    Key: {
        "year": year,
        "title": title
    }
};

docClient.get(params, (err, data) => console.log(err ?? data));
