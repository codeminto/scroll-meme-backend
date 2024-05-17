const express = require("express");
const router = express.Router();
const prizeController = require("../controllers/prize-claimed.controller");

router.get("/", prizeController.getPrizeClaimed);

router.get("/:contractAddress", prizeController.getPrizeClaimedByContractAddress);

module.exports = router;