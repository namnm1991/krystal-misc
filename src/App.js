import './App.css';
import Web3 from 'web3';
import { useState } from 'react';

let ethereum = window.ethereum;

function App() {
  // if (!ethereum) {
  //   return (
  //     <p>Please install Metamask</p>
  //   )
  // }
  let [account, setAccount] = useState();
  let [signature, setSignature] = useState();
  let refCode = "a";
  
  let web3 = new Web3(ethereum)
  console.log(web3.eth.accounts)

  async function connect() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setAccount(accounts[0])
    web3.eth.personal.sign(refCode, accounts[0]).then((sig) => {setSignature(sig)})
  }  

  return (
    <div>
      <h3>Sign message</h3>
      <p>Hello account: {account}</p>
      <p>Code: {refCode}</p>
      <p>signature: {signature}</p>
      <button onClick={connect}>Connect Metamask</button>
    </div>
  )
}

export default App;
