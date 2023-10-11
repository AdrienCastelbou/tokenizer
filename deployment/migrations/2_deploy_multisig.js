const Multisig = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  const addresses = ["0x520f0d93B7c193aF531D9efE4ea7E2163A25349a", "0x9b877504594Fe6d616a1c13DfDE00B4D0620d0Bf", "0x374C086BE3af90849433E9BdE0a49f1207C08485"]
  const numConirmations = 2;
  deployer.deploy(Multisig, addresses, numConirmations);
};