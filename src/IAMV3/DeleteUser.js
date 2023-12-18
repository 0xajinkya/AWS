const { IAMClient, DeleteUserCommand } = require("@aws-sdk/client-iam"); 

const client = new IAMClient();
const params = {
    "UserName": "John1"
};

const command = new DeleteUserCommand(params);
const res = client.send(command).then((data) => console.log(data));