const { Product } = require("../../models/Product.model");

const deleteProduct = async (req, res, next) => {
	try {
		await product.findByIdAndDelete(req.params.id);
		res.status(201).json({
			success: true,
			msg: "Product deleted successfully",
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = deleteProduct;
