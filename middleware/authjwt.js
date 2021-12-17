const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	let authHeader = req.headers.token;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
			if (err) res.status(401).json({ msg: "Unauthorized, Invalid token" });

			req.user = verified;

			next();
		});
	} else {
		return res
			.status(403)
			.json({ msg: "You need to login to perform this action" });
	}
};

const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			return res.status(403).json({ msg: "Unauthorized!" });
		}
	});
};

const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			return res.status(403).json({ msg: "Unauthorized!" });
		}
	});
};

module.exports = {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
};
