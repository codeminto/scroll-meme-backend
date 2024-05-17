const express = require("express");
const router = express.Router();
const winnerAnnounced = require("../controllers/winners-announced.controller");

router.get("/", winnerAnnounced.getWinners);

router.get("/:contractAddress", winnerAnnounced.getWinnersByContractAddress);

module.exports = router;