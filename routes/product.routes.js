const express = require("express");
const router = express.Router();
const createProductController = require("../controllers/product/createProduct.controller");
const updateProductController = require("../controllers/product/updateProd.controller");
const deleteProductController = require("../controllers/product/deleteProd.controller");
const getProductController = require("../controllers/product/getProd.controller");
const getAllProductController = require("../controllers/product/getAllProd.controller");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/authjwt");

router.post("/", verifyTokenAndAdmin, createProductController);
router.get("/find/:id", getProductController);
router.get("/", getAllProductController);
router.put("/:id", verifyTokenAndAdmin, updateProductController);
router.delete("/:id", verifyTokenAndAdmin, deleteProductController);

module.exports = router;
