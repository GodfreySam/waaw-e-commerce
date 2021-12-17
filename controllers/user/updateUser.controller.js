const { User } = require("../../models/User.model");
const bcryptjs = require("bcryptjs");

const updateUser = async (req, res, next) => {
	try {
		if (req.body.password) {
			 req.body.password = bcryptjs.hashSync(req.body.password, 12);
		}

		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);

		res.status(201).json({
			success: true,
			msg: "User updated successfully",
			user: {
				...updatedUser._doc,
				password: "",
			},
		});

	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = updateUser;
