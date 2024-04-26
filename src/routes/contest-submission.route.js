const express = require("express");
const router = express.Router();
const contestSubmissionController = require("../controllers/contest-submission.controller");
router.get("/", contestSubmissionController.getSubmissions);

router.get("/:contractAddress", contestSubmissionController.getContestSubmissionByContestAddress);

module.exports = router;