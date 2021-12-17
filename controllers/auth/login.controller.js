const { User } = require("../../models/User.model");
const bcryptjs = require("bcryptjs");
const { compare } = bcryptjs;
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
	try {
		let { userInput, password } = req.body;
		if (!userInput || !password)
			return res
				.status(400)
				.json({ success: false, msg: "All fields are required" });

		let userName = userInput.toLowerCase().replace(/ /g, "");

		let findUser = await User.findOne({
			$or: [{ username: userName }, { email: userName }],
		});

		if (!findUser)
			return res
				.status(400)
				.json({ success: false, msg: "Username does not exist" });

		if (!findUser.verified)
			return res.status(401).json({
				success: false,
				msg: "Please check your email to confirm your identity",
			});

		let passwordMatch = await compare(password, findUser.password);

		if (!passwordMatch)
			return res
				.status(403)
				.json({ success: false, msg: "Invalid login credential" });

		let accessToken = jwt.sign(
			{ id: findUser._id, isAdmin: findUser.isAdmin },
			process.env.JWT_SECRET,
			{
				expiresIn: "3d",
			},
		);

		res.status(200).json({
			success: true,
			msg: "Login successful",
			accessToken,
			user: {
				...findUser._doc,
				password: "",
			},
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = loginUser;
