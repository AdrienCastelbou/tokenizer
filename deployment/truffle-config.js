require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: process.env.BSCSCANAPIKEY
    },
    networks: {
        testnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://data-seed-prebsc-1-s1.bnbchain.org:8545`),
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