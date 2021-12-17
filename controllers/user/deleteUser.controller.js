const { User } = require("../../models/User.model");

const deleteUser = async (req, res, next) => {
	try {	
		await User.findByIdAndDelete(req.params.id)
		res.status(201).json({
			success: true,
			msg: "User deleted successfully",
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = deleteUser;
