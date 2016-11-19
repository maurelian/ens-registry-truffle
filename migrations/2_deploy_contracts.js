var ens = require('../node_modules/ethereum-ens');
var ethHash = ens.prototype.namehash("eth")

module.exports = function(deployer) {
  deployer.deploy(ENS, web3.eth.accounts[0]);   
  deployer.deploy(Registrar, ENS.address, ethHash);
};
