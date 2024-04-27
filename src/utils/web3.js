const Web3 = require("web3");

const ethNetwork = `wss://arbitrum-sepolia.infura.io/ws/v3/${process.env.INFURA_API_KEY}`
// const ethNetwork = `wss://scroll-sepolia.blockpi.network/v1/ws/e668f86b1ef9e6b32ada9cddfd3ce9d21d3af3df`
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