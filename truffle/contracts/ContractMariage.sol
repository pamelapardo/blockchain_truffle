// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

contract ContractMariage {
  string woman;
  string man;

  function getWomanName() public view returns (string memory) {
    return woman;
  }
  function setWomanName(string memory _marriedWoman) public {
    woman = _marriedWoman;
  }


  function getManName() public view returns (string memory) {
    return man;
  }
  function setManName(string memory _marriedMan) public {
    man = _marriedMan;
  }
}
