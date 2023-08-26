const ContractMariage = artifacts.require("ContractMariage");

contract('ContractMariage', () => {
  // it('should read newly written values', async() => {
  //   const ContractMariageInstance = await ContractMariage.deployed();
  //   var man = (await ContractMariageInstance.read()).toString();

  //   // assert.equal(man, 0, "0 wasn't the initial value");

  //   // await ContractMariageInstance.write('Homer');
  //   // man = (await ContractMariageInstance.read()).toString();
  //   // assert.equal(man, 'Homer', "Homer was not written");

  //   await ContractMariageInstance.write('Robert');
  //   man = (await ContractMariageInstance.read()).toString();
  //   assert.equal(man, 'Robert', "Roberto was not written");
  // });
  it('should read newly written values', async() => {
    const ContractMariageInstance = await ContractMariage.deployed();
    var woman = (await ContractMariageInstance.readWoman()).toString();
    
    // assert.equal(woman, 0, "0 wasn't the initial value");
    
    await ContractMariageInstance.setWomanName('Maria');
    woman = (await ContractMariageInstance.readWoman()).toString();
    assert.equal(woman, 'Maria', "Maria was not written");
  });
});