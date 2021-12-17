const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		products: [
			{
				productId: {
					type: String,
				},
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
		amount: { type: String, required: true },
		address: { type: Object, required: true },
		status: { type: String, default: "pending" },
	},
	{ timestamps: true },
);

module.exports = { Order: model("order", OrderSchema) };
