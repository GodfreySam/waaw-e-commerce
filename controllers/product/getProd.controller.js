const { Product } = require("../../models/Product.model");

const getProduct = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.id);

		res.status(200).json({
			success: true,
			msg: "Product fetched successfully",
			data: product
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getProduct;
