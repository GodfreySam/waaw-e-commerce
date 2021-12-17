const { User } = require("../../models/User.model");

const getUserStats = async (req, res, next) => {
   const date = new Date();
   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

	try {
		
      const data = await User.aggregate([
         { $match: { createdAt: { $gte: lastYear } } },
         {
            $project: {
               month: { $month: "$createdAt" },
            },
         },
         {
            $group: {
               _id: "$month",
               total: { $sum: 1 }
            }
         }
      ]);

		res.status(200).json({
			success: true,
			msg: "Users fetched successfully",
			data: data
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getUserStats;
