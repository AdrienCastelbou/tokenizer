const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs')

module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: "XKC84MIGZI1ND62T6PH3GVSA7DM17QQABP"
    },
    networks: {
        testnet: {
            provider: () => new HDWalletProvider("rate muffin girl unknown runway job ethics marble demand castle awkward angle", `https://data-seed-prebsc-1-s1.bnbchain.org:8545`),
            network_id: 97,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasPrice: 20000000000,
        }
    },
    mocha: {
        timeout: 100000
    },

    compilers: {
        solc: {
          version: "0.8.13", // A version or constraint - Ex. "^0.5.0"
        }
      }
}