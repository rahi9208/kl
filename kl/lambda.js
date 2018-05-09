let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
class Handler {

	constructor(){
		this.height=90;
	}

	handle=(event, context, callback)=>{
		callback(null, 'Successfully executed'+this.height);
	}
}
exports.handler = new Handler().handle;


