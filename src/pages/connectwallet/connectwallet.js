import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled from 'styled-components'
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import  ConnectButton  from './connectbutton';
import { Button } from './connectbutton';
import icon from './img/metamask.svg';
import {Connectwalletst, Pagetitle, Icon, P, List, Buttongroup} from './connectwalletst';


import useWalletAddress from '../../hooks/useWalletAddress'
import useIsLogin from '../../hooks/useIsLogin'

import { useDispatch } from 'react-redux';
import { setWalletAddress } from '../../store/auth'


const Web3 = require('web3');
const web3 = new Web3("http://172.30.1.72:8545")
function Connectwallet() {

  const dispatch = useDispatch();


  console.log("Connectwallet")

  const metamaskwebsite =()=>{
    window.open('https://metamask.io/');
  };
  
  const downloadmetamask = () => {
    window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn');
  };

  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined)
  const [currentBalance, setCurrentBalance] = useState(undefined)
  const [chainId, setChainId] = useState(undefined)
  // const [isConnected,setIsConnected] = useState(false)
  

  const walletAddress = useWalletAddress()

  const isLogin = useIsLogin();

  const openMetamask = useCallback(async () => {
    alert('connect')
    console.log("OPEN METAMASK")
    const chainId = 777

    console.log('>>>>>>>>>window.ethereum',window.ethereum.networkVersion, chainId)
    if (window.ethereum.networkVersion !== chainId) {
      try {
        console.log("SWITCH")
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(chainId) }]
        });
      } catch (err) {
          // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902 || err.code === -32603) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'CUSTOM',
                chainId: web3.utils.toHex(chainId),
                nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
                rpcUrls: ['https://1d61-119-192-224-93.ngrok-free.app/geth/']
              }
            ]
          });
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(chainId) }]
          });
        }
      }
    }
    try {
      if(typeof window.ethereum !== 'undefined') {
        await getMetamaskData();

        // setIsConnected(true);
      } else {
        alert("please install MetaMask")
      }
    } catch (error) {
      console.log(error);
    }
  },[])

  const getMetamaskData = async () => {
    const _provider = await getProvider();
    const _signer = await getSigner(_provider);
    await getWalletData(_signer);
  }

  const getProvider = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    return provider;
  }

  const getSigner = async (provider) => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setSigner(signer) 

    return signer;
  }
  
  const getWalletData = async(signer) => {
    const result = await Promise.all([signer.getAddress(),signer.getBalance(),signer.getChainId()])
    dispatch(setWalletAddress(result[0]))
    setCurrentBalance(Number(ethers.utils.formatEther(result[1])))
    setChainId(result[2])
    console.log(result)

    let data = {
      walletAddress: result
    };
    
    fetch('http://172.30.1.72:3000', {
      method: "post",
      headers :{
        "Content-Type" : "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(result => {
        console.log(result);
      });
    

  }
  return (
  <Connectwalletst>
    
    <Pagetitle>
      CONNECT WALLET
    </Pagetitle>
    <hr/>
    <Icon wi='80%' he='70%' src={icon} />
    <Buttongroup>
    <Button onClick={metamaskwebsite}>
      GO WEBSITE
    </Button>
    <Button onClick={downloadmetamask}>
    DOWNLOAD METAMASK
    </Button>
    <ConnectButton
              // isConnected={isLogin}
              connectWallet={openMetamask}
              // {/* connectWallet={console.log("!!!!!")} */}
              // walletAddress={walletAddress}
              // currentBalance={currentBalance}
              // chainId={chainId}
              />
    {/* </ConnectButton> */}
    </Buttongroup>
    {isLogin && walletAddress && (
        <div>
          <h2>Login 상태</h2>
          <p>{isLogin ? '로그인 완료' : '로그인 전'}</p>
          
          <h2>Wallet Address</h2>
          <p>{walletAddress}</p>

          <h2>Current Balance</h2>
          <p>{currentBalance} ETH</p>
        </div>
      )}


  <h5>MetaMask 이용하기 </h5>
  <P>우리 서비스를 이용하기위해서는 메타마스크 지갑에 연결해야 합니다</P>
  <h6>step1: MetaMask 다운로드</h6>
  <P>웹 브라우저를 열고 MetaMask 웹사이트를 방문합니다</P>
  
  <h6>step2: MetaMask 확장 프로그램 설치</h6>
  <P>"Get MetaMask" 버튼이나 웹사이트의 "지금 다운로드" 버튼을 클릭합니다. 이렇게 하면 확장 프로그램 스토어로 이동합니다.</P>
  
  <h6>Google Chrome</h6>
  <List>
  <ol>
    <li>"Add to Chrome" 버튼을 클릭합니다.</li>
    <li>팝업 창이 나타납니다. "확장 프로그램 추가"를 클릭하여 MetaMask를 설치합니다.</li>
    <li>브라우저의 우측 상단에 MetaMask 아이콘이 나타납니다.</li>
  </ol>
  </List>
  <h6>Firefox</h6>
  <List>
  <ol>
    <li>"Get Firefox Extension" 버튼을 클릭합니다.</li>
    <li>팝업 창이 나타납니다. MetaMask를 설치하려면 "추가"를 클릭합니다.</li>
    <li>브라우저의 우측 상단에 MetaMask 아이콘이 나타납니다.</li>
  </ol>
  </List>
  <h6>Brave</h6>
  <List>
  <ol>
    <li>"Get Brave Extension" 버튼을 클릭합니다.</li>
    <li>팝업 창이 나타납니다. MetaMask를 설치하려면 "Add to Brave"를 클릭합니다.</li>
    <li>브라우저의 우측 상단에 MetaMask 아이콘이 나타납니다.</li>
  </ol>
  </List>
  
  <h6>step 3: 새 MetaMask 지갑 생성</h6>
  <P>MetaMask를 설치한 후, 브라우저의 MetaMask 아이콘을 클릭하여 엽니다.</P>
  <P>화면 안내에 따라 새 지갑을 생성합니다. 시드 구문을 안전하게 보관하고 강력한 비밀번호를 설정하는 것을 잊지 마세요.</P>
  
  <h6>step 4: MetaMask 사용 시작</h6>
  <P>지갑이 생성되면 MetaMask를 사용하여 암호화폐 계정을 관리하고 탈중앙화 애플리케이션(DApp)과 상호 작용할 수 있습니다.</P>
  
  <h6>추가 자료</h6>
  <P>더 많은 정보와 문제 해결에 대해서는 MetaMask 공식 문서를 참조할 수 있습니다:</P>
  <Icon  wi='30%' he='10%' src={icon}></Icon>
  </Connectwalletst>
  );
}


export default Connectwallet;