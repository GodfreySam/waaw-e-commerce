const { Order } = require("../../models/Order.model");

const updateOrder = async (req, res, next) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);

		res.status(201).json({
			success: true,
			msg: "Order updated successfully",
			data: updatedOrder
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = updateOrder;
