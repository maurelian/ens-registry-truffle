module.exports = function(deployer) {
  // deploy the ENS with the owner as my TestRPC coinbase address
  deployer.deploy(ENS, "0x1a1c961856b5d002428eb97241bf0c6731039ca9");   
  deployer.deploy(Registrar, 
            ENS.address, 
            "0xd1b0e2eec983ad6a7fb21f6fc706af8717b12b8814d2596016750ea73e00b57f"
    );
};
