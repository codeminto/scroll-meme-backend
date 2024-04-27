// Contest Service

const Upvote = require("../models/upvote.model");

async function getUpvote() {
    return (await Upvote.find().lean());
}

async function getUpvote(id) {
    return (await Upvote.findById(id));
}

async function getUpvoteByQuery(query) {
    return await Upvote.findOne(query);
}
async function getUpvoteByQuery(query) {
    return await Upvote.find(query);
}

async function addNewUpvote(payload) {
    console.log(payload);
    // Create a new Contest instance
    const newContest = new Upvote(payload);

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
    getUpvote,
    addNewUpvote, // Add this line to export your new function
    getUpvoteByQuery,
    getUpvote,
    getUpvoteByQuery
};