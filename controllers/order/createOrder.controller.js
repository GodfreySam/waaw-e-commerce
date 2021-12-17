const { Order } = require("../../models/Order.model");

const createOrder = async (req, res, next) => {
	try {
		const newOrder = new Order(req.body);
		const savedOrder = await newOrder.save();
		res.status(200).json({
			success: true,
			msg: "Order saved successfully",
			data: savedOrder,
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = createOrder;
