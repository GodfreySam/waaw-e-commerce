const { Cart } = require("../../models/Cart.model");

const getCarts = async (req, res, next) => {
	try {
		const carts = await Cart.find();
		res.status(200).json({
			success: true,
			msg: "Carts fetched successfully",
			data: carts,
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getCarts;
