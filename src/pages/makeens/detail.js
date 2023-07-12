import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet, BrowserRouter, useLocation} from 'react-router-dom';
import { Detailst, Pagetitle, H1, P, Input, Center, Button } from './detailst';
import useWalletAddress from '../../hooks/useWalletAddress';
import { errors } from 'ethers';
const Web3    = require('web3');
const web3    = new Web3(new Web3.providers.HttpProvider('https://1d61-119-192-224-93.ngrok-free.app/geth/'));
// const EthContract = require('ethjs-contract')
// const Eth = require('ethjs-query')
// const eth = new Eth(new web3.providers.HttpProvider('https://1d61-119-192-224-93.ngrok-free.app/geth/'))
// const contract = new EthContract(eth)

const abi = [
  {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "NewName",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "resolve",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "registerName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "newAddr",
          "type": "address"
        }
      ],
      "name": "updateAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getNameByAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
]

function Detail(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputValue = searchParams.get('inputValue');
  const [editedValue, setEditedValue] = useState(inputValue);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  web3.eth.setProvider(Web3.givenProvider)
  
  const contractAddress ='0x126E7c67aE4570EA2a9dEb868783Fa5Cd4e6A317'
  const walletAddress = useWalletAddress();

  const [ens, setMyens] = useState([]);

  const handleConfirm = () => {
    // Perform any necessary action with the edited value here
    console.log('Edited Value:', editedValue);
  };


  const handleMoveToMyPage = async () => {
    // Add editedValue to mypage array
    // setMyens((prevMypage) => [...prevMypage, editedValue]);
    // const updatedMypage = [...ens, editedValue];
    // localStorage.setItem('mypage', JSON.stringify(updatedMypage));

 
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Metamask is installed
       const accounts = await  window.ethereum.request({ method: 'eth_requestAccounts' })
  
       const ensname = editedValue;
       const addr = walletAddress;
       console.log(ensname,addr)
       
      //  const data = await web3.eth.abi.encodeFunctionCall({
      //    name: 'registerName',
      //    type: 'function',
      //    inputs: [{
      //      type: 'string',
      //      name: 'name'
      //    },{
      //      type: 'address',
      //      name: 'addr'
      //    }]
      //  }, [ensname, addr]);
  
  
      //  console.log(data)
      //  const gasEstimate = await web3.eth.estimateGas({
      //    from: addr,
      //    to: contractAddress,
      //    data: data
      //  }).catch(error => {
      //    console.error('error',error);
      //    throw error;
      //  });
       
      //  const tx = {
      //    gas: String(gasEstimate),
      //    gasPrice: web3.utils.toWei('100', 'gwei'),
      //    to: contractAddress,
      //    from: addr,
      //    data: data,
      //    value: 0x0
      //  };
      //  console.log(tx)

      //  web3.currentProvider.send({
      //   method:
      //  })
      setLoading(true);
      const targetContract = new web3.eth.Contract(abi,contractAddress)
      await targetContract.methods.registerName(ensname,addr).send({from: walletAddress})
      setLoading(false);

      // 일단 주석axios.get(`https://api.test.com/test?name=${ensname}&addr=${addr}`)
       
       // Send the transaction
       console.log('send the transaction')

       // 로딩 시작 setLoading(true);

       // 아래 코드가 메타마스크 승인 처리를 기다리고 있는 비동기 함수 
    // const txHash =    await window.ethereum.request({ 
    //      method: 'eth_sendTransaction', 
    //      params: [tx] 
    //    })
      //  const targetContractData = contract(abi)
      //  const targetContract = targetContractData.at(contractAddress)

      //  await targetContract.registerName(ensname,addr).send()
      // 로딩 중지  setLoading(false)

       
  
      //  console.log('Transaction sent successfully. Transaction hash:', txHash);
  
      
          alert('이름 생성이 완료 되었습니다')
          // Navigate to "My Page"
          navigate('/mypage');
        } else{
          alert('error')
        }
    } catch(err) {
      console.log(err);
      window.alert('에러발생')
    }
      };

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  return (
  <Detailst>
    <Pagetitle>
        MAKE ENS
    </Pagetitle>
    <hr />
      <H1>Your ENS</H1>
      <P>{editedValue}</P>

    <Center>
      <Input
       type="text"
        value={editedValue}
        onChange={handleInputChange}
      ></Input>
    </Center>
    <Center>
      <Button onClick={handleConfirm}>MODIFY</Button>
      <Button onClick={handleMoveToMyPage}>CONFIRM</Button>
    </Center>  

  
  </Detailst>
  );
}

export default Detail;

