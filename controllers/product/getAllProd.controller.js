const { Product } = require("../../models/Product.model");

const getProducts = async (req, res, next) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let products;

		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(5);
		} else if (qCategory) {
			products = await products.find({
				categories: {
					$in: [qCategory],
				},
			});
      } else {
         products = await Product.find();
      }

		res.status(200).json({
			success: true,
			msg: "Products fetched successfully",
			data: products,
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getProducts;
