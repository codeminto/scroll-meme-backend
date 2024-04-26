// Contest Service

const PrizeClaimed = require("../models/prize-claimed.model");

async function getPrizeClaimed() {
    return (await PrizeClaimed.find().lean());
}

async function getPrizeClaimed(id) {
    return (await PrizeClaimed.findById(id));
}

async function getPrizeClaimedByQuery(query) {
    return await PrizeClaimed.findOne(query);
}
async function getPrizeClaimedByQuery(query) {
    return await PrizeClaimed.find(query);
}


async function addNewPrizeClaimed(payload) {
    console.log(payload);
    // Create a new Contest instance
    const newContest = new PrizeClaimed(payload);

    // Save the new contest to the database and return the saved document
    try {
        const savedContest = await newContest.save();
        return savedContest;
    } catch (error) {
        // Handle potential errors, such as validation errors or database connectivity issues
        throw error; // Rethrow the error to be handled by the caller
    }
}

module.exports = {
    getPrizeClaimed,
    addNewPrizeClaimed, // Add this line to export your new function
    getPrizeClaimedByQuery,
    getPrizeClaimed,
    getPrizeClaimedByQuery
};