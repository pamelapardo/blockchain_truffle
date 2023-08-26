const SimpleStorage = artifacts.require("SimpleStorage");
const ContractMariage = artifacts.require("ContractMariage");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(ContractMariage)
};
