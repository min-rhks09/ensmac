import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet, BrowserRouter, useLocation} from 'react-router-dom';
import { Detailst, Pagetitle, H1, P, Input, Center, Button } from './detailst';
import useWalletAddress from '../../hooks/useWalletAddress';
import { errors } from 'ethers';
const Web3    = require('web3');
const web3    = new Web3(new Web3.providers.HttpProvider('https://1d61-119-192-224-93.ngrok-free.app/geth/'));



function Detail(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputValue = searchParams.get('inputValue');
  const [editedValue, setEditedValue] = useState(inputValue);
  const navigate = useNavigate();
  
  const contractAddress ='0x5A74D0127401f59F0e3d3cdBD5cf34E75059c811'
  const walletAddress = useWalletAddress();

  const [ens, setMyens] = useState([]);

  const handleConfirm = () => {
    // Perform any necessary action with the edited value here
    console.log('Edited Value:', editedValue);
  };


  const handleMoveToMyPage = () => {
    // Add editedValue to mypage array
    // setMyens((prevMypage) => [...prevMypage, editedValue]);
    // const updatedMypage = [...ens, editedValue];
    // localStorage.setItem('mypage', JSON.stringify(updatedMypage));

    if (typeof window.ethereum !== 'undefined') {
      // Metamask is installed
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(async (accounts) => {
          const ensname = editedValue;
          const addr = walletAddress;
          console.log(ensname,addr)
          
          const data = web3.eth.abi.encodeFunctionCall({
            name: 'registerName',
            type: 'function',
            inputs: [{
              type: 'string',
              name: 'name'
            },{
              type: 'address',
              name: 'addr'
            }]
          }, [ensname, addr]);
          console.log(data)
          const gasEstimate = await web3.eth.estimateGas({
            from: addr,
            to: contractAddress,
            data: data
          }).catch(error => {
            console.error('error',error);
            throw error;
          });
          
          const tx = {
            gas: String(gasEstimate),
            gasPrice: web3.utils.toWei('100', 'gwei'),
            to: contractAddress,
            from: addr,
            data: data,
            value: 0x0
          };
          console.log(tx)
          // Send the transaction
          console.log('send the transaction')
          window.ethereum.request({ 
            method: 'eth_sendTransaction', 
            params: [tx] 
          }).then(txHash => {
            console.log('Transaction sent successfully. Transaction hash:', txHash);
          }).catch(error => {
            console.error('There was an error sending the transaction', error);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    
        alert('이름 생성이 완료 되었습니다')
        // Navigate to "My Page"
        navigate('/mypage');
      } else{
        alert('error')
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

