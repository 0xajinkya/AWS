const AWS = require("aws-sdk");
const fs = require("fs");
AWS.config.update({"region": "us-east-1"})

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies data");

const allMovies = JSON.parse(fs.readFileSync("moviedata.json", "utf-8"));

allMovies.forEach(movie => {
    const params = {
        TableName: "Movies",
        Item: {
            "year": movie.year,
            "title": movie.title,
            "info": movie.info
        }
    };
    docClient.put(params, (err, data) => console.log(err ?? `Movie added:  ${movie.title}`))
});