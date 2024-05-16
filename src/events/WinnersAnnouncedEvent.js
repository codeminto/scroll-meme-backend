const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getWinnerAnnouncedByQuery, addNewWinnerAnnounced } = require('../services/winners-announced.service.js')
const mapEventData = (event) => {
    try {
        const result = {};
        const { returnValues, transactionHash, address } = event
        result['payout'] = returnValues.payout;
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
        await contract.events.WinnerAnnounced({ fromBlock: 28963744, }, async function (error, event) {
            if (error) {
                throw error;
            }
            const mappedWinnerAnnouncedData = mapEventData(event)
            try {
                const winner = await getWinnerAnnouncedByQuery({ contractAddress: mappedWinnerAnnouncedData?.contractAddress })
                if (!winner) {
                    await addNewWinnerAnnounced(mappedWinnerAnnouncedData)
                }
            } catch (error) {
                console.log("ERROR_WHILE_ADDING_WINNERS_ANNOUNCED: ", error)
            }
        })
    } catch (error) {
        console.log('ERROR_WHILE_ADDING_WINNERS_ANNOUNCED_READING : ', error);
    }
}

module.exports = {
    WinnersCalculatedEventListener
};