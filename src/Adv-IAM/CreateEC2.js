import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2";

const client = new EC2Client();

const instance_profile_name = "MyJSInstance";

const params = {
    ImageId: "ami-079db87dc4c10ac91",
    InstanceType: "t2.micro",
    MinCount: 1,
    MaxCount: 1,
    IamInstanceProfile: {
        Name: instance_profile_name
    }
};

const launchEC2 = async() => {
    try {
        const command = new RunInstancesCommand(params);
        const res = await client.send(command);
        console.log(res, "EC2 is launced");
    } catch (error) {
        console.log(error);
    }
};

launchEC2();