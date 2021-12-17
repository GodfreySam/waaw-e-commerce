const { Cart } = require("../../models/Cart.model");

const updateCart = async (req, res, next) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);

		res.status(201).json({
			success: true,
			msg: "Cart updated successfully",
			data: updatedCart
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = updateCart;
