
const mongoose = require("mongoose");
const contestSubmissionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
        default: null
    },
    imageUrlOrHash: {
        type: String,
        default: null
    },
    description: {
        type: String,
    },
    submissionId: {
        type: String,
        required: true
    },
    factoryContractAddress: {
        type: String,
        required: true
    },
    transactionHash: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("contest-submission", contestSubmissionSchema);