const { Order } = require("../../models/User.model");

const getUserStats = async (req, res, next) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
               month: { $month: "$createdAt" },
               sales: "$amount"
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: "$sales" },
				},
			},
		]);

		res.status(200).json({
			success: true,
			msg: "Users fetched successfully",
			data: income
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getUserStats;
