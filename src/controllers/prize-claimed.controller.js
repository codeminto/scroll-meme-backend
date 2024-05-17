// Meme controllers
const contestService = require("../services/prize-claimed.service");

const getPrizeClaimed = async (req, res) => {
    const { winner, contractAddress } = req.query;
    const query = {};
    if (winner) {
        query.winner = { '$regex': winner, $options: 'i' }
    }
    if (contractAddress) {
        query.contractAddress = { '$regex': contractAddress, $options: 'i' }
    }
    const winners = await contestService.getPrizeClaimed(query);
    res.send(winners);
};

const getPrizeClaimedByContractAddress = async (req, res) => {
    const { contractAddress } = req.params
    const query = { contractAddress: { '$regex': contractAddress, $options: 'i' } }
    const winner = await contestService.getPrizeClaimedByQuery(query);
    res.send(winner);
};

module.exports = {
    getPrizeClaimed,
    getPrizeClaimedByContractAddress,
}