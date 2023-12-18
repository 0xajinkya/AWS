const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    UserName: "john"
};

iam.createUser(params, async(err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    return;
})