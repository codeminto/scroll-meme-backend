// Contest Service

const Contest = require("../models/contest.model");

async function getContests() {
    return (await Contest.find().lean());
}

async function getContest(id) {
    return (await Contest.findById(id));
}

async function getContestByQuery(query) {
    return await Contest.findOne(query);
}
async function getContestsByQuery(query) {
    return await Contest.find(query);
}

async function getPopularContests() {
    return (await Contest.find().sort({ downloads: "1" }).limit(15).lean());
}

async function getTrendingContests() {
    return (await Contest.find().sort({ likes: "1" }).limit(15).lean());
}


async function searchContest(searchValue) {
    const testReg = new RegExp(searchValue);
    const contest = await Contest.find({ title: testReg });
    return contest;
}


async function likeContest(memeId) {
    const contest = await Contest.findById(memeId);
    contest.likes += 1;
    await contest.save();
    return contest.likes;
}


async function downloadContest(memeId) {
    const contest = await Contest.findById(memeId);
    contest.downloads += 1;
    await contest.save();
    return contest;
}


async function downloadContest(memeId) {
    const contest = await Contest.findById(memeId);
    contest.downloads += 1;
    await contest.save();
    return contest;
}

async function addNewContest(payload) {
    console.log(payload);
    // Create a new Contest instance
    const newContest = new Contest(payload);

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
    getContests,
    getTrendingContests,
    getPopularContests,
    downloadContest,
    searchContest,
    likeContest,
    addNewContest, // Add this line to export your new function
    getContest,
    getContestByQuery,
    getContestsByQuery
};