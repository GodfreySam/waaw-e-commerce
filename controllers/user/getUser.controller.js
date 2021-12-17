const { User } = require("../../models/User.model");

const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);

		res.status(200).json({
			success: true,
			msg: "User fetched successfully",
			user: {
				...user._doc,
				password: "",	
			}
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = getUser;
