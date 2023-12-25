const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const ses = new AWS.SES();

const html_contents =
	"<html>" +
	"<h1 style='text-align: center'>AWS with JS and Node JS</h1>" +
	"<p style='color: red'>Welcome to the course and thanks for buying</p>" +
	"</html>";

const params = {
	Destination: {
		ToAddresses: ["kahaneajinkya051@gmail.com"]
	},
	Message: {
		Body: {
			Html: {
				Charset: "UTF-8",
				Data: html_contents
			}
		},
		Subject: {
			Charset: "UTF-8",
			Data: "AWS Course"
		}
	},
	Source: "kahaneajinkya051@gmail.com"
};

ses.sendEmail(params, (err, data) => console.log(err ?? data));