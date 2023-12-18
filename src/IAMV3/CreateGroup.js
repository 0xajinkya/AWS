const { IAMClient, CreateGroupCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
    GroupName: "S3Admins1"
};

const command = new CreateGroupCommand(params);

iamClient.send(command)
    .then((data) => {
        console.log('Group created successfully:', data);
    })
    .catch((error) => {
        console.error('Error creating group:', error);
    });