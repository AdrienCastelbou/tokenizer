const argv = require('minimist')(process.argv.slice(2), {string: ['custom_argument']});

try {
  const Multisig = artifacts.require("MultiSigWallet");
}
catch (e) {
  console.log(e)
  process.exit()
}

if (!argv['custom_argument']) {
  console.log('custom_argument parameter is needed')
  process.exit()
}
let args = argv['custom_argument'].trim().split(/\s+/)

if (args.length < 2) {
  console.log("Wrong usage of custom_arguemnt (only used for Multisig contract deployment): truffle migrate [...] --custom_argument 'numConfirmations address1 address2 ...addressX'")
  process.exit();
}
const numConirmations = parseInt(args.shift())
const addresses = args
addresses.forEach(a => {
  if (!/^(0x)?[0-9a-fA-F]{40}$/.test(a)) {
    console.log("Error : Wrong format address")
    process.exit()
  }
})
if (!numConirmations || numConirmations < 1 || numConirmations > 50 ) {
  console.log("Error : numConfirmations should be an int greater than 0 and lower than 50")
  process.exit()
}

module.exports = function (deployer) {
  deployer.deploy(Multisig, addresses, numConirmations);
};