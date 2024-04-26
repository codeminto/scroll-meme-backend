const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getUpvote, addNewUpvote } = require('../services/upvote.service.js')
const mapEventData = (event) => {
    try {
        const result = {};
        const { returnValues, transactionHash, address } = event
        result['voter'] = returnValues.voter;
        result['contractAddress'] = returnValues.contractAddress;
        result['submissionId'] = returnValues.submissionId;
        result['factoryContractAddress'] = address;
        result['transactionHash'] = transactionHash;
        return result;
    } catch (error) {
        console.log("ERROR_WHILE_MAPPING_UPVOTE ", error)
    }
}
const UpvoteEventListener = async () => {
    try {
        let contract = await ContestContractInstance();
        await contract.events.Upvoted({ fromBlock: 0 + 1, }, async function (error, event) {
            if (error) {
                throw error;
            }
            console.log("UPVOTE 1:", event)
            const mappedContestData = mapEventData(event)
            console.log("UPVOTE 2:", event)
            try {
                const contest = await getUpvote({ winner: mappedContestData?.winner, contractAddress: mappedContestData?.contractAddress })
                if (!contest) {
                    await addNewUpvote(mappedContestData)
                }
            } catch (error) {
                console.log("ERROR_WHILE_ADDING_UPVOTE: ", error)
            }
        })
    } catch (error) {
        console.log('ERROR_WHILE_ADDING_UPVOTE_READING : ', error);
    }
}

module.exports = {
    UpvoteEventListener
};