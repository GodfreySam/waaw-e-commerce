const { Product } = require("../../models/Product.model");

const createProduct = async (req, res, next) => {
	try {
		const newProduct = new Product(req.body);
		const savedProduct = await newProduct.save();
		res.status(200).json({
			success: true,
			msg: "product saved successfully",
			data: savedProduct,
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = createProduct;
