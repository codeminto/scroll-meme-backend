const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getPrizeClaimedByQuery, addNewPrizeClaimed } = require('../services/prize-claimed.service.js')
const mapEventData = (event) => {
    try {
        const result = {};
        const { returnValues, transactionHash, address } = event
        result['winner'] = returnValues.winner;
        result['contractAddress'] = returnValues.contractAddress;
        result['amount'] = returnValues.amount;
        result['factoryContractAddress'] = address;
        result['transactionHash'] = transactionHash;
        return result;
    } catch (error) {
        console.log("ERROR_WHILE_MAPPING_PRIZE_CLAIMED ", error)
    }
}
const PrizeClaimedEventListener = async () => {
    try {
        let contract = await ContestContractInstance();
        await contract.events.PrizeClaimed({ fromBlock: 0 + 1, }, async function (error, event) {
            if (error) {
                throw error;
            }
            console.log("UPVOTE 1:", event)
            const mappedContestData = mapEventData(event)
            console.log("UPVOTE 2:", event)
            try {
                const contest = await getPrizeClaimedByQuery({ winner: mappedContestData?.winner, contractAddress: mappedContestData?.contractAddress })
                if (!contest) {
                    await addNewPrizeClaimed(mappedContestData)
                }
            } catch (error) {
                console.log("ERROR_WHILE_ADDING_PRIZE_CLAIMED: ", error)
            }
        })
    } catch (error) {
        console.log('ERROR_WHILE_ADDING_PRIZE_CLAIMED_READING : ', error);
    }
}

module.exports = {
    PrizeClaimedEventListener
};