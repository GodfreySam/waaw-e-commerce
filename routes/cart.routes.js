const express = require("express");
const router = express.Router();
const createCartController = require("../controllers/cart/createCart.controller");
const updateCartController = require("../controllers/cart/updateCart.controller");
const deleteCartController = require("../controllers/cart/deleteCart.controller");
const getCartController = require("../controllers/cart/getCart.controller");
const getAllCartController = require("../controllers/cart/getAllCart.controller");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/authjwt");

router.post("/", verifyToken, createCartController);
router.get("/find/:userId", verifyTokenAndAuthorization, getCartController);
router.get("/", verifyTokenAndAdmin, getAllCartController);
router.put("/:id", verifyTokenAndAuthorization, updateCartController);
router.delete("/:id", verifyTokenAndAuthorization, deleteCartController);

module.exports = router;
