const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getContestSubmissionByQuery, addNewContestSubmission } = require('../services/contest.submission.service.js')
const mapEventData = (event) => {
    try {
        const result = {};
        const { returnValues, transactionHash, address } = event
        result['userId'] = returnValues.userId;
        result['contractAddress'] = returnValues.contractAddress;
        result['imageUrlOrHash'] = returnValues.imageUrlOrHash;
        result['description'] = returnValues.description;
        result['submissionId'] = returnValues.submissionId;
        result['factoryContractAddress'] = address;
        result['transactionHash'] = transactionHash;
        return result;
    } catch (error) {
        console.log("ERROR_WHILE_MAPPING_CONTEST_SUBMISSION ", error)
    }
}
const ContestSubmissionEventListener = async () => {
    try {
        let contract = await ContestContractInstance();
        await contract.events.SubmissionCreated({ fromBlock: 28963744, }, async function (error, event) {
            if (error) {
                throw error;
            }
            const mappedContestData = mapEventData(event)
            try {
                const contest = await getContestSubmissionByQuery({ userId: mappedContestData?.userId, contractAddress: mappedContestData?.contractAddress })
                if (!contest) {
                    await addNewContestSubmission(mappedContestData)
                }
            } catch (error) {
                console.log("ERROR_WHILE_ADDING_CONTEST_SUBMISSION: ", error)
            }
        })
    } catch (error) {
        console.log('ERROR_WHILE_ADDING_CONTEST_SUBMISSION_READING : ', error);
    }
}

module.exports = {
    ContestSubmissionEventListener
};