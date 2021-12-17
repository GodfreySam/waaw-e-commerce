const { Order } = require("../../models/Order.model");

const getOrders = async (req, res, next) => {
	try {
		const orders = await Order.find();
		res.status(200).json({
			success: true,
			msg: "Orders fetched successfully",
			data: orders,
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getOrders;
