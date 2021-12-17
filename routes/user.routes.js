const express = require("express");
const router = express.Router();
const updateController = require("../controllers/user/updateUser.controller");
const deleteController = require("../controllers/user/deleteUser.controller");
const getController = require("../controllers/user/getUser.controller");
const getAllController = require("../controllers/user/getAllUser.controller");
const getStatsController = require("../controllers/user/userStats.controller");
const { 
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/authjwt");

router.get("/find/:id", verifyTokenAndAdmin, getController);
router.get("/", verifyTokenAndAdmin, getAllController);
router.get("/", verifyTokenAndAdmin, getStatsController);
router.put("/:id", verifyTokenAndAuthorization, updateController);
router.delete("/:id", verifyTokenAndAuthorization, deleteController);

module.exports = router;
