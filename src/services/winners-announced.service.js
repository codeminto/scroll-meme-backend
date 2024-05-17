const WinnerAnnounced = require("../models/winners-announced.model");

async function getWinnerAnnounced(query = {}) {
    return (await WinnerAnnounced.find(query).lean());
}

async function getWinnerAnnouncedById(id) {
    return (await WinnerAnnounced.findById(id));
}

async function getWinnerAnnouncedByQuery(query) {
    return await WinnerAnnounced.findOne(query);
}
async function getWinnersAnnouncedByQuery(query) {
    return await WinnerAnnounced.find(query);
}

async function addNewWinnerAnnounced(payload) {
    const newWinner = new WinnerAnnounced(payload);
    try {
        const savedWinner = await newWinner.save();
        return savedWinner;
    } catch (error) {
        // Handle potential errors, such as validation errors or database connectivity issues
        throw error; // Rethrow the error to be handled by the caller
    }
}

module.exports = {
    getWinnerAnnounced,
    addNewWinnerAnnounced, // Add this line to export your new function
    getWinnerAnnouncedByQuery,
    getWinnerAnnouncedById,
    getWinnersAnnouncedByQuery
};