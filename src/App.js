import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import Grid from './components/grid';
import styled from 'styled-components'

import {
  Flex,
  Box,
  Card,
  Image,
  Heading,
  Text,
  Button
} from 'rebass'

const MoveButton = styled.button`
    width: 140px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #0000FF;
    color: blue;
    background-color: white;
    font-family: 'VT323', monospace;
    font-size: 35px;

    &:hover {
      background-color: blue;
      color: white;
    }
`

const abi = [{"constant":true,"inputs":[],"name":"nextMove","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNextMove","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pressMe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const address = '0xCf6000749aACD2D802dDd644B77D7BfCecc06AD6';
const ethereum = window.ethereum;
let contract;
// window.addEventListener('load', () => {
//   if (typeof Web3 !== 'undefined') {
//     let web3 = new Web3();
//     console.log(web3);
//     const contractInstance = web3.eth.Contract(abi, address)

//     console.log(contractInstance);
//   }
// });

let web3;

const eventWeb3 = new Web3('wss://ropsten.infura.io/ws');
const web3Contract = new eventWeb3.eth.Contract(abi, address);
var options = {
  fromBlock: '0x0',
  address
};
  // var subscription = eventWeb3.eth.subscribe('logs', options, function(error, result){
  //   if(error || result == null){
  //       console.log('Error when watching incoming transactions: ', error.message);
  //       return;
  //   }
  //   console.log('Got something back: ', result);
  //   // code continues...
  // });


window.addEventListener('load', async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      console.log(web3)
      // web3.eth.Contract(abi, address);
      contract = web3.eth.Contract(abi, address);
      console.log(web3.eth);
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    web3 = new Web3(web3.currentProvider);

    // Acccounts always exposed
    web3.eth.sendTransaction({/* ... */});
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      grid:[
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]}
          
        ],
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
        ],
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
        ],
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
        ],
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
        ],
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
        ],
        [
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.7]}, 
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.4]},
          {color:'blue',opacity:[0.3]},
        ]
      ],
      initialVal:[1,1],
      rightLimit: 6,
      topLimit: 6,
      defaultAddress:'0xb573295b7F3B12513B0c602cDDd3f0D75f8961F8',
      account:''
    };
    this.initial = this.initial.bind(this);
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }
  initial(){
    const first = this.state.initialVal[0];
    const second = this.state.initialVal[1];
    let oldGrid = this.state.grid;
    oldGrid[first][second]['gary'] = 1;
    this.setState({
      grid: oldGrid
    })
  }
  update(value){
    console.log(value);
    let red = value.substr(3, 2);
    red = parseInt(red, 16);
    let val = value[2];
    val = parseInt(val, 16);
    val = Math.floor(val/4);
    let oldGrid = this.state.grid;
    let position = this.state.initialVal;
    let right = this.state.initialVal[0];
    let top = this.state.initialVal[1];
    let rightLimit = this.state.rightLimit;
    let topLimit = this.state.topLimit;
    oldGrid[right][top]['gary'] = 0;
    if (rightLimit > right && val === 0){
      right += 1;
    } else if (topLimit > top && val === 1){
      top += 1;
    } else if (right > 0 && val === 2){
      right -= 1;
    } else if (top > 0 && val === 3){
      top -= 1;
    }
    position[0] = right;
    position[1] = top;
    oldGrid[right][top]['gary'] = 1;
    oldGrid[right][top]['bgColor'] = 'rgb(' + red + ',' + red + ',255)';
    console.log(oldGrid[right][top]['bgColor']);
    this.setState({
      grid: oldGrid,
      initialVal: position
    });
  }
  subscribe(){
    const that = this;
    eventWeb3.eth.subscribe('pendingTransactions', options, (error, result) => {
      if (!error) {
        console.log('result: ' + result);
      }
        that.update(result);
    }).on("data", (result) => {
      console.log(result);
    }).on("changed", (result) => {
      console.log(result);
    });
  }
  
  componentDidMount(){
    this.initial();
    this.subscribe();
    this.setState({
      account: window.web3.eth.accounts[0]
    });
  }
  history = async () => {
    // const history = web3.eth.subscribe(address);
    console.log(contract);
  }
  send = async () => {
    console.log(this.state.account);
    const tx = await contract.methods.pressMe().send({from: this.state.account})
    console.log(tx)
  }
  read = async () => {
    const nextMove = await contract.methods.getNextMove().call();
    console.log('next Move: ', nextMove)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button
           onClick={this.send}
          >
            Contract
          </button>
          <button
           onClick={this.read}
          >
            Read
          </button>
          <button
           onClick={this.history}
          >
            history
          </button>
        </header>
        <div className="title">
          <h1 className="titleHeader">“GET GARY HOME.”</h1>
          <Box pb='60px'>
            <img src={require('./assets/svg/bar.svg')} />
          </Box>
          
        </div>

        <Flex>
          <Flex width={1/5} flexDirection='column'>
            {/* <Box py='20px'> */}
              <Text fontSize='30px' color='#0000FF' textAlign='right'>History</Text>
            {/* </Box> */}
          </Flex>
          <Flex width={3/5} px='50px' flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid format={this.state.grid}></Grid>
            {/* <MoveBox width={80}> */}
              <MoveButton  py='50px' border={1} borderColor="#0000FF">Move</MoveButton>
            {/* </MoveBox> */}
          </Flex>
          
          <Flex width={1/5} flexDirection='column'>
            <Text fontSize='30px' color='#0000FF' textAlign='left'>History</Text>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default App;
