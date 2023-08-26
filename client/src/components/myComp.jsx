import { useState } from 'react'
import useEth from "../contexts/EthContext/useEth";

function MyComp() {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");


  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const read = async () => {
    console.log(contract.methods)
    const value = await contract.methods.getWomanName().call({ from: accounts[0] });
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.setWomanName(newValue).send({ from: accounts[0] });
  };


  return (
    <div>
      <h1>myComp</h1>
      
      <button onClick={read}>Click to read</button>
      <button onClick={write}>Click to marry</button>
      <input type="text" placeholder="your name" value={inputValue} onChange={handleInputChange}/>
      <p>this is your femme: {} </p>
    </div>
  )
}

export default MyComp 