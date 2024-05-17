// Meme controllers
const contestService = require("../services/winners-announced.service");

const getWinners = async (req, res) => {
    const { winner, contractAddress } = req.query;
    const query = {};
    if (winner) {
        const regex = new RegExp(winner, 'i');
        query.winningSubmissions = { $in: [regex] }
    }
    if (contractAddress) {
        query.contractAddress = { '$regex': contractAddress, $options: 'i' }
    }
    const winners = await contestService.getWinnerAnnounced(query);
    res.send(winners);
};

const getWinnersByContractAddress = async (req, res) => {
    const { contractAddress } = req.params
    const query = { contractAddress: { '$regex': contractAddress, $options: 'i' } }
    const winner = await contestService.getWinnerAnnouncedByQuery(query);
    res.send(winner);
};

module.exports = {
    getWinners,
    getWinnersByContractAddress,
}