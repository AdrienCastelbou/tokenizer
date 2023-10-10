const Token = artifacts.require("coin42");

module.exports = function (deployer) {
  deployer.deploy(Token);
};