const { ContestContractInstance } = require('../utils/contractInstance.js');
const { getContestByQuery, addNewContest } = require('../services/contest.service.js')
const { getFrameHtmlResponse } = require('@coinbase/onchainkit');
const mapEventData = (event) => {
    try {
        const result = {};
        const { returnValues, transactionHash, address } = event
        result['contestId'] = returnValues.campaignId;
        result['ownerAddress'] = returnValues.owner;
        result['campaignAddress'] = returnValues.campaignAddress;
        result['imageUrl'] = returnValues.imageUrl;
        result['title'] = returnValues.title;
        result['description'] = returnValues.description;
        result['startedAt'] = returnValues.startDate;
        result['endedAt'] = returnValues.endDate;
        result['maxParticipants'] = returnValues.maxParticipants;
        result['judgingType'] = returnValues?.judgingType;
        result['totalPrizeAmount'] = returnValues.totalPrizeAmount;
        result['totalWinners'] = returnValues.totalWinners;
        result['factoryContractAddress'] = address;
        result['transactionHash'] = transactionHash;
        return result;
    } catch (error) {
        console.log("ERROR_WHILE_MAPPING_CAMPAIGN_CREATED ", error)
    }
}
const CreateContestEventListener = async () => {
    try {
        let contract = await ContestContractInstance();
        const fromBlock = contract.currentBlockNumber - 40000;
        await contract.events.CampaignCreated({ fromBlock }, async function (error, event) {
            if (error) {
                throw error;
            }
            const mappedContestData = mapEventData(event)
            try {
                const contest = await getContestByQuery({ contestId: mappedContestData?.contestId })
                if (!contest) {
                    const frame = getFrameHtmlResponse({
                        buttons: [
                            {
                                label: 'Participate Now!',
                                action: "link",
                                target: `${process.env.MEME_CASTER_URL}/contest/${mappedContestData.contestId}`
                            },
                        ],
                        image: mappedContestData.imageUrl
                    })
                    await addNewContest({ ...mappedContestData, frame })
                }
            } catch (error) {
                console.log("ERROR_WHILE_ADDING_NEW_CONTEST: ", error)
            }

        })
    } catch (error) {
        console.log('👉🏻 Line 13 : ', error);
    }
}

module.exports = {
    CreateContestEventListener
};