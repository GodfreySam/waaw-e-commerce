const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let userSchema = new Schema(
	{
		username: String,
		email: String,
		password: String,
		avatar: String,
		secretToken: String,
	},
	{ timestamps: true },
);

module.exports = {
	User: model("user", userSchema),
};
