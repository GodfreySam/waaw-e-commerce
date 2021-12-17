const { Order } = require("../../models/Order.model");

const getOrder = async (req, res, next) => {
	try {
		const orders = await Order.find({ userId: req.params.id });

		res.status(200).json({
			success: true,
			msg: "Order fetched successfully",
			data: orders
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getOrder;
