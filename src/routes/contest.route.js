const express = require("express");
const router = express.Router();
const contestController = require("../controllers/contest.controller");

router.get("/", contestController.getContests);

router.get("/:campaignAddress", contestController.getContestByCampaignAddress);

module.exports = router;