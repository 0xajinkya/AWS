// import { IAMClient, CreateUserCommand } from "@aws-sdk/client-iam";
const { IAMClient, CreateUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import

const client = new IAMClient();
const params = {
    "UserName": "John1"
};

const command = new CreateUserCommand(params);
const res = client.send(command).then((data) => console.log(data));