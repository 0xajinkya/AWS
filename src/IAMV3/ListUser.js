const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const command = new ListUsersCommand();

/**
 * Logs user data from AWS
 * @param {Error} err - Error object if request fails. 
 * @param {Object} data - Response object containing user data
 * @returns {undefined}
 * @description
 * - Checks for errors and logs if present
 * - Loops through user objects if available 
 * - Logs user name and ARN for each
 * - Logs a message if no users found
*/
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
