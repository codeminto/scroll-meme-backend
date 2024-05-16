
const mongoose = require("mongoose");
const prizeClaimedSchema = new mongoose.Schema({
    winner: {
        type: String,
        default: null
    },
    contractAddress: {
        type: String,
        default: null
    },
    amount: {
        type: String,
        default: null
    },
    factoryContractAddress: {
        type: String,
        default: null
    },
    transactionHash: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("prize-claimed", prizeClaimedSchema);