const Web3 = require("web3");

//const ethNetwork = `wss://arbitrum-sepolia.infura.io/ws/v3/${process.env.INFURA_API_KEY}`x/
// const ethNetwork = `wss://scroll-sepolia.blockpi.network/v1/ws/${process.env.BLOCK_PI_API_KEY}`
const ethNetwork = `wss://opbnb-testnet.nodereal.io/ws/v1/${process.env.NODEREAL_API_KEY}`//'wss://opbnb-testnet.nodereal.io/ws/v1/e9a36765eb8a40b9bd12e680a1fd2bc5'
const ethereumConnectionInstance = new Promise(resolve => {
    resolve(
        new Web3(
            new Web3.providers.WebsocketProvider(ethNetwork, {
                reconnect: {
                    auto: true,
                    delay: 5000, // ms
                    maxAttempts: 10,
                    onTimeout: false,
                },
            })
        )
    )
})
module.exports = {
    ethereumConnectionInstance
}