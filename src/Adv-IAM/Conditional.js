import { IAMClient, CreatePolicyCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const currentDate = new Date();
const currentDateString = currentDate.toISOString().split("T")[0];

const startTime = `${currentDateString}T01:00:00Z`;
const endTime = `${currentDateString}T03:00:00Z`;

const policyDoc = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::buc-123-ket/*",
            "Condition": {
                "DateGreaterThan": {
                    "aws:CurrentTime": startTime,
                },
                "DateLessThan": {
                    "aws:CurrentTime": endTime
                }
            }
        }
    ]
};

const createIAMPolicy= async() => {
    try {
        const command = new CreatePolicyCommand({
            PolicyName: "JSAccessPolicy",
            PolicyDocument: JSON.stringify(policyDoc)
        });
        const res = await client.send(command);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

createIAMPolicy();