
const mongoose = require("mongoose");
const upvoteSchema = new mongoose.Schema({
    voter: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
        default: null
    },
    submissionId: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("upvote", upvoteSchema);