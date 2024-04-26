const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getWinnerCalculatedByQuery, addNewWinnersCalculated } = require('../services/winners-calculated.service.js')
const mapEventData = (event) => {
    try {
        const result = {};
        const { returnValues, transactionHash, address } = event
        result['winningSubmissions'] = returnValues.winningSubmissions;
        result['contractAddress'] = returnValues.contractAddress;
        result['factoryContractAddress'] = address;
        result['transactionHash'] = transactionHash;
        return result;
    } catch (error) {
        console.log("ERROR_WHILE_MAPPING_WINNERS_CALCULATED ", error)
    }
}
const WinnersCalculatedEventListener = async () => {
    try {
        let contract = await ContestContractInstance();
        await contract.events.WinnersCalculated({ fromBlock: 0 + 1, }, async function (error, event) {
            if (error) {
                throw error;
            }
            const mappedContestData = mapEventData(event)
            try {
                const contest = await getWinnerCalculatedByQuery({ contractAddress: mappedContestData?.contractAddress })
                if (!contest) {
                    await addNewWinnersCalculated(mappedContestData)
                }
            } catch (error) {
                console.log("ERROR_WHILE_ADDING_WINNERS_CALCULATED: ", error)
            }
        })
    } catch (error) {
        console.log('ERROR_WHILE_ADDING_WINNERS_CALCULATED_READING : ', error);
    }
}

module.exports = {
    WinnersCalculatedEventListener
};