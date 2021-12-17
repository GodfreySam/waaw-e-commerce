const { Product } = require("../../models/Product.model");

const updateProduct = async (req, res, next) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);

		res.status(201).json({
			success: true,
			msg: "Product updated successfully",
			data: updatedProduct
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = updateProduct;
