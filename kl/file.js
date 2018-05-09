let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	let ps = [];
	for (let i = 0; i < 1000000; i++) {
		ps.push(s3.putObject({
			"Body": "kl",
			"Bucket": "batchprocess.bucket",
			"Key": i
		}).promise());
	}
	Promise.all(ps).then(data=>{
		callback(null, JSON.stringify(i));
	})
}