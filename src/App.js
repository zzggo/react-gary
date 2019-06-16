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

const Scroll = styled(Flex)({
  overflow: 'scroll',
  height: '100vh',
})

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

const abi = [
  {
    "constant": false,
    "inputs": [],
    "name": "makeMove",
    "outputs": [
      {
        "name": "x",
        "type": "uint256"
      },
      {
        "name": "y",
        "type": "uint256"
      },
      {
        "name": "lastMoveState",
        "type": "uint256"
      },
      {
        "name": "lastMoveAddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "registerForGame",
    "outputs": [
      {
        "name": "move",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "resetState",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "move",
        "type": "uint256"
      }
    ],
    "name": "MoveMade",
    "type": "event"
  }
];
const address = '0x7097dF05577127EdE24997f7934e6bf6488F839e';
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
      direction: '',
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
      rightLimit: 16,
      topLimit: 9,
      defaultAddress:'0xb573295b7F3B12513B0c602cDDd3f0D75f8961F8',
      account:'',
      move: '',
      history: []
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
    // console.log(value);
    let red = value.substr(3, 2);
    red = parseInt(red, 16);
    let val = value[2];
    val = parseInt(val, 16);
    val = Math.floor(val/4);
    this.addHistoryItem(val)
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
    // console.log(oldGrid[right][top]['bgColor']);
    this.setState({
      grid: oldGrid,
      initialVal: position
    });
  }
  subscribe(){
    const that = this;
    eventWeb3.eth.subscribe('pendingTransactions', options, (error, result) => {
      if (!error) {
        // console.log('result: ' + result);
      }
        that.update(result);
    }).on("data", (result) => {
      // console.log(result);
    }).on("changed", (result) => {
      // console.log(result);
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
  joinGame = async () => {
    console.log(this.state.account);
    const tx = await contract.methods.registerForGame().send({from: this.state.account}, (e, r) => {
      // this.setState({direction: r});
      console.log("TX: ", r);
      console.log("ERROR: ", e);
    })

  };
  resetGame = async () => {
    console.log(this.state.account);
    const tx = await contract.methods.resetState().send({from: this.state.account}, (e, r) => {
      // this.setState({reset: r});
      console.log("TX: ", r);
      console.log("ERROR: ", e);
    })
    console.log("TX: ", tx);
  };
  makeMove = async () => {
    console.log(this.state.account);
    const tx = await contract.methods.makeMove().send({from: this.state.account}, (e, r) => {
      // this.setState({move: r});
      console.log("TX: ", r);
      console.log("TX: ", r);
      console.log("ERROR: ", e);
    })
    this.setState({move: tx});
    console.log("TX: ", tx);
  };

  read = async () => {
    const nextMove = await contract.methods.getNextMove().call();
    console.log('next Move: ', nextMove)
  };
  addHistoryItem = (val) => {
    // not allowed AND not working
    let history = this.state.history.concat(val);
    this.setState({ history })
  };
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
          <Flex width={1/5} flexDirection='column' justifyContent='right' alignItems='flex-end'>
            {/* <Box py='20px'> */}
              <Text fontSize='30px' color='#0000FF' textAlign='right'>Join Game</Text>
              <MoveButton onClick={this.joinGame} alignItems='flex-end' py='50px' border={1} borderColor="#0000FF">Join</MoveButton>
              <Text fontSize='30px' color='#0000FF' textAlign='right'>Your direction: {this.state.direction}</Text>
              <Text fontSize='30px' color='#0000FF' textAlign='right'>Your move: {this.state.move}</Text>
              <Box py='10px' px='8px'>
                <img src={require('./assets/svg/arrow1.svg')} />
              </Box>
              <Box py='10px' px='8px'>
                <img src={require('./assets/svg/arrow2.svg')} />
              </Box>

              <Box py='10px' px='8px'>
                <img src={require('./assets/svg/arrow3.svg')} />
              </Box>
              <Box py='10px' px='8px'>
                <img src={require('./assets/svg/arrow4.svg')} />
              </Box>

              <Box pb='60px'>
                <MoveButton onClick={this.joinGame}  py='50px' border={1} borderColor="#0000FF">Join</MoveButton>
              </Box>
              <Text fontSize='30px' color='#0000FF' textAlign='right'>Your direction: {this.state.direction}<img src={require('./assets/svg/right-arrow.svg')} /></Text>
              {/*<Text fontSize='30px' color='#0000FF' textAlign='right'>Your move: {this.state.move}</Text>*/}

            {/* </Box> */}
          </Flex>
          <Flex width={3/5} px='50px' flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid format={this.state.grid}></Grid>
            {/* <MoveBox width={80}> */}
              <MoveButton onClick={this.makeMove} py='50px' border={1} borderColor="#0000FF">Move</MoveButton>
              {/*<MoveButton onClick={this.resetGame} py='50px' border={1} borderColor="#0000FF">Reset</MoveButton>*/}
            {/* </MoveBox> */}
          </Flex>

          <Scroll width={1/5} flexDirection='column'>
            <Text fontSize='30px' color='#0000FF' textAlign='left'>History</Text>
            {
              this.state.history.map((val, i) => {
                if (val === 0) {
                  return <img src={require('./assets/svg/up-arrow.svg')} />
                } else if (val === 1) {
                  return <img src={require('./assets/svg/down-arrow.svg')} />
                } else if (val === 2) {
                  return <img src={require('./assets/svg/left-arrow.svg')} />
                } else if (val === 3) {
                  return <img src={require('./assets/svg/right-arrow.svg')} />
                }

              })
            }
          </Scroll>
        </Flex>
      </div>
    );
  }
}

export default App;
