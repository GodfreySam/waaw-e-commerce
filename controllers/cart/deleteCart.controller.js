const { Cart } = require("../../models/Cart.model");

const deleteCart = async (req, res, next) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(201).json({
			success: true,
			msg: "Cart item deleted successfully",
		});
	} catch (err) { 
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = deleteCart;
