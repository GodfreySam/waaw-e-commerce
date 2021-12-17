const express = require("express");
const router = express.Router();
const createOrderController = require("../controllers/order/createOrder.controller");
const updateOrderController = require("../controllers/order/updateOrder.controller");
const deleteOrderController = require("../controllers/order/deleteOrder.controller");
const getOrderController = require("../controllers/order/getOrder.controller");
const getAllOrderController = require("../controllers/order/getAllOrder.controller");
const getOrderStatsController = require("../controllers/order/orderStats.controller");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/authjwt");

router.post("/", verifyToken, createOrderController);
router.get("/find/:userId", verifyTokenAndAuthorization, getOrderController);
router.get("/", verifyTokenAndAdmin, getAllOrderController);
router.get("/", verifyTokenAndAdmin, getOrderStatsController);
router.put("/:id", verifyTokenAndAdmin, updateOrderController);
router.delete("/:id", verifyTokenAndAdmin, deleteOrderController);

module.exports = router;
 