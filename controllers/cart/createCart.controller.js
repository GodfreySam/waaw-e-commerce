const { Cart } = require("../../models/Cart.model");

const createCart = async (req, res, next) => {
	try {
		const newCart = new Cart(req.body);
		const savedCart = await newCart.save();
		res.status(200).json({
			success: true,
			msg: "item added to cart successfully",
			data: savedCart,
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = createCart;
