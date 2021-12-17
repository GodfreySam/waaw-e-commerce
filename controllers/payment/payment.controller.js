// const KEY2 = process.env.PAYSTACK_KEY;
// const paystack = require("paystack");
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

const createPayment = async (req, res, next) => {
	try {
		  stripe.charges.create(
					{
						source: req.body.tokenId,
						amount: req.body.amount,
						currency: "usd",
					},
					(stripeErr, stripeRes) => {
						if (stripeErr) {
							res.status(500).json(stripeErr);
						} else {
							res.status(200).json(stripeRes);
						}
					},
				);
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = createPayment;
