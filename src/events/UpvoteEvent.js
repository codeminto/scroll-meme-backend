const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getUpvote, addNewUpvote, getUpvoteByQuery } = require('../services/upvote.service.js')
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
        await contract.events.Upvoted({ fromBlock: 28963744, }, async function (error, event) {
            if (error) {
                throw error;
            }
            const mappedContestData = mapEventData(event)
            try {
                const contest = await getUpvoteByQuery({ voter: mappedContestData?.voter, contractAddress: mappedContestData?.contractAddress });
                if (!contest || !contest?.length) {
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