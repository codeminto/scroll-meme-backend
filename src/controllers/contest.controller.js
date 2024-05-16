// Meme controllers
const contestService = require("../services/contest.service");

const getContests = async (req, res) => {
    const { campaignAddress, ownerAddress } = req.query;
    const query = {};
    if (ownerAddress) {
        query.ownerAddress = { '$regex': ownerAddress, $options: 'i' }
    }
    if (campaignAddress) {
        query.campaignAddress = { '$regex': campaignAddress, $options: 'i' }
    }
    const submissions = await contestService.getContests(query);
    res.send(submissions);
};

const getContestByCampaignAddress = async (req, res) => {
    const { campaignAddress } = req.params
    const query = { campaignAddress: { '$regex': campaignAddress, $options: 'i' } }
    const submission = await contestService.getContestByQuery(query);
    res.send(submission);
};

module.exports = {
    getContests,
    getContestByCampaignAddress,
}