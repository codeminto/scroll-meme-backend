// Contest Service

const WinnersCalculated = require("../models/winners-calculated.model");

async function getWinnersCalculated() {
    return (await WinnersCalculated.find().lean());
}

async function getWinnersCalculated(id) {
    return (await WinnersCalculated.findById(id));
}

async function getWinnerCalculatedByQuery(query) {
    return await WinnersCalculated.findOne(query);
}
async function getWinnersCalculatedByQuery(query) {
    return await WinnersCalculated.find(query);
}

async function addNewWinnersCalculated(payload) {
    console.log(payload);
    // Create a new Contest instance
    const newContest = new WinnersCalculated(payload);

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
    getWinnersCalculated,
    addNewWinnersCalculated, // Add this line to export your new function
    getWinnersCalculatedByQuery,
    getWinnersCalculated,
    getWinnerCalculatedByQuery
};