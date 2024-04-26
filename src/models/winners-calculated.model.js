
const mongoose = require("mongoose");
const winningSubmissionSchema = new mongoose.Schema({
    imageUrlOrHash: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    submissionId: {
        type: String,
        required: true
    },
    submissionUpvotes: {
        type: String,
        required: true
    },
})
const winnersCalculatedSchema = new mongoose.Schema({
    winningSubmissions: {
        type: [winningSubmissionSchema]
    },
    contractAddress: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("winners-calculated", winnersCalculatedSchema);