const argv = require('minimist')(process.argv.slice(2), {string: ['custom_argument']});
const Multisig = artifacts.require("MultiSigWallet");

let args = argv['custom_argument'].trim().split(/\s+/)

if (args.length < 2) {
  console.log("Wrong usage of custom_arguemnt (only used for Multisig contract deployment): truffle migrate [...] --custom_argument 'numConfirmations address1 address2 ...addressX'")
  process.exit();
}
const numConirmations = parseInt(args.shift())
const addresses = args

if (!numConirmations || numConirmations < 1 || numConirmations > 50 ) {
  console.log("Error : numConfirmations should be an int greater than 0 and lower than 50")
  process.exit()
}

module.exports = function (deployer) {
  deployer.deploy(Multisig, addresses, numConirmations);
};