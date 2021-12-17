const { User } = require("../../models/User.model");

const getUser = async (req, res, next) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(5)
			: await User.find();
		res.status(200).json({
			success: true,
			msg: "Users fetched successfully",
			users: {
				...users._doc,
				password: "",
			},
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getUser;
