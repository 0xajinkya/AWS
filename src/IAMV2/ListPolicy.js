const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    Scope: "Local",
    // Scope: "AWS",
    // Scope: "All"
};

iam.listPolicies(params, (err, data) => {
    console.log(err ?? data.Policies.length);
});