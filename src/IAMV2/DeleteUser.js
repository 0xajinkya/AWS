const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
	UserName: "Prathmesh"
	// AccessKeyId: "AKIAWJGOAEGAUMP6NIZC"
	// GroupName: "S3Admins"
};

// iam.removeUserFromGroup(params, (err, data) => console.log(err ?? data))

// iam.deleteAccessKey(params, (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

iam.deleteUser(params, (err, data) => console.log(err ?? data));
