// Contest Service

const ContestSubmission = require("../models/contest-submission.model");

async function getContestSubmissions() {
    return (await ContestSubmission.find().lean());
}

async function getContestSubmission(id) {
    return (await ContestSubmission.findById(id));
}

async function getContestSubmissionByQuery(query) {
    return await ContestSubmission.findOne(query);
}
async function getContestSubmissionsByQuery(query) {
    return await ContestSubmission.find(query);
}

async function getPopularContestSubmission() {
    return (await ContestSubmission.find().sort({ downloads: "1" }).limit(15).lean());
}

async function getTrendingContestSubmission() {
    return (await ContestSubmission.find().sort({ likes: "1" }).limit(15).lean());
}


async function searchContest(searchValue) {
    const testReg = new RegExp(searchValue);
    const contest = await ContestSubmission.find({ title: testReg });
    return contest;
}


async function likeContest(memeId) {
    const contest = await ContestSubmission.findById(memeId);
    contest.likes += 1;
    await contest.save();
    return contest.likes;
}


async function downloadContest(memeId) {
    const contest = await ContestSubmission.findById(memeId);
    contest.downloads += 1;
    await contest.save();
    return contest;
}


async function downloadContest(memeId) {
    const contest = await ContestSubmission.findById(memeId);
    contest.downloads += 1;
    await contest.save();
    return contest;
}

async function addNewContestSubmission(payload) {
    console.log(payload);
    // Create a new Contest instance
    const newContest = new ContestSubmission(payload);

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
    getContestSubmission,
    getTrendingContestSubmission,
    getPopularContestSubmission,
    addNewContestSubmission, // Add this line to export your new function
    getContestSubmissionByQuery,
    getContestSubmissions,
    getContestSubmissionsByQuery
};