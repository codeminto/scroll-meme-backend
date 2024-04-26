
const mongoose = require("mongoose");
const contestSchema = new mongoose.Schema({
    contestId: {
        type: String,
        required: true
    },
    ownerAddress: {
        type: String,
        required: true
    },
    campaignAddress: {
        type: String,
        default: null
    },
    imageUrl: {
        type: String,
        required: true
    },
    factoryContractAddress: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startedAt: {
        type: String,
        required: true
    },
    endedAt: {
        type: String,
        required: true
    },
    frame: {
        type: String,
    },
    totalPrizeAmount: {
        type: String,
        required: true
    },
    maxParticipants: {
        type: String,
        required: true
    },
    judgingType: {
        type: String,
        required: true,
        enum: ['Admin', 'Public'],
        default: 'Admin'
    },
    totalWinners: {
        type: Number,
        required: true
    },
    winners: {
        type: [String]
    },
    contestFrames: {
        type: [mongoose.Schema.ObjectId],
        ref: 'contest-user-frame-mapping'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("contest", contestSchema);