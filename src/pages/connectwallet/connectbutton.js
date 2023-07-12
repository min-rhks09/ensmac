import { ethers } from "ethers";
import { useCallback } from "react";
import styled from 'styled-components'

export let Button = styled.button`
  background-color: #D6EF0E;
  color: #ffffff;
  padding: 1vw 1vw 1vw 1vw;
  margin: 2vw 1vw 2vw;1vw;
  border-radius: 5px;
  font-size: 2vw;
  font-weight: 300;
`
const ConnectButton = (props) => {
  const { isConnected, connectWallet, currentBalance, walletAddress } = props;
    const WalletAddress = `${walletAddress?.substring(0,10)}…`
    const CurrentBalance = `${currentBalance?.toFixed(4)}`

  return (
    <>
      {isConnected ? ( 
         <Button>
       {WalletAddress}
        </Button>
      ) : (
        <Button onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectButton;