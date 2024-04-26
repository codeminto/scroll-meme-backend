// Meme controllers
const contestSubmissionService = require("../services/contestsubmission.service");

const getSubmissions = async (req, res) => {
    const submissions = await contestSubmissionService.getContestSubmissions();
    res.send(submissions);
};

const getSubmission = async (req, res) => {
    const submission = await contestSubmissionService.getContestSubmission(req.params.id);
    res.send(submission);
};

const getContestSubmissionByContestAddress = async (req, res) => {
    const query = { contractAddress: req.params.contractAddress }
    console.log(query)
    const submission = await contestSubmissionService.getContestSubmissionsByQuery(query);
    res.send(submission);
};





module.exports = {
    getSubmission,
    getSubmissions,
    getContestSubmissionByContestAddress,
}