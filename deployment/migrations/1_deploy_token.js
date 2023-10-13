try {
  const Token = artifacts.require("coin42");
}
catch (e) {
  console.log(e)
  process.exit()
}
module.exports = function (deployer) {
  deployer.deploy(Token);
};