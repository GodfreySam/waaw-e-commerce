const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment/payment.controller");

// const {
// 	verifyToken,
// 	verifyTokenAndAuthorization,
// 	verifyTokenAndAdmin,
// } = require("../middleware/authjwt");

router.post("/payment", paymentController);

module.exports = router;
