const { Cart } = require("../../models/Cart.model");

const getCart = async (req, res, next) => {
	try {
		const cart = await Cart.findOne({userId: req.params.userId});

		res.status(200).json({
			success: true,
			msg: "Cart fetched successfully",
			data: cart
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getCart;
