// Meme controllers
const contestSubmissionService = require("../services/contest.submission.service");

const getSubmissions = async (req, res) => {
    const { userId, contractAddress } = req.query;
    const query = {};
    if (userId) {
        query.userId = { '$regex': userId, $options: 'i' }
    }
    if (contractAddress) {
        query.contractAddress = { '$regex': contractAddress, $options: 'i' }
    }
    const submissions = await contestSubmissionService.getContestSubmissions(query);
    res.send(submissions);
};

const getContestSubmissionByContestAddress = async (req, res) => {
    const query = { contractAddress: { '$regex': req.params.contractAddress, $options: 'i' } }
    const submission = await contestSubmissionService.getContestSubmissionsByQuery(query);
    res.send(submission);
};

module.exports = {
    getSubmissions,
    getContestSubmissionByContestAddress,
}