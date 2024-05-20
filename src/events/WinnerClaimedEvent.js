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
        const fromBlock = contract.currentBlockNumber - 40000;
        await contract.events.WinnerClaimed({ fromBlock }, async function (error, event) {
            if (error) {
                throw error;
            }
            const mappedContestData = mapEventData(event)
            try {
                const prizeClaimed = await getPrizeClaimedByQuery({ winner: mappedContestData?.winner, contractAddress: mappedContestData?.contractAddress })
                if (!prizeClaimed) {
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