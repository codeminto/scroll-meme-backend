
const mongoose = require("mongoose");

const winnersCalculatedSchema = new mongoose.Schema({
    winningSubmissions: {
        type: [String],
        required: true
    },
    contractAddress: {
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
    payout: {
        type: [String],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("winners-announced", winnersCalculatedSchema);