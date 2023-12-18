const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const command = new ListUsersCommand();

iamClient.send(command, (err, data) => {
  if (err) {
    console.error("Error listing users:", err);
  } else {
    if (data.Users) {
      data.Users.forEach((user) => {
        console.log("User Name:", user.UserName);
        console.log("User ARN:", user.Arn);
        console.log("---");
      });
    } else {
      console.log("No users found.");
    }
  }
});
