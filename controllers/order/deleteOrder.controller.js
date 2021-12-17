const { Order } = require("../../models/Order.model");

const deleteOrder = async (req, res, next) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(201).json({
			success: true,
			msg: "Order deleted successfully",
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = deleteOrder;
