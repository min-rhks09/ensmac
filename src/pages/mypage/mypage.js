import { useState, useEffect } from 'react';
import {Link, Route, Routes, useNavigate, Outlet, useLocation} from 'react-router-dom';
import styled, { css } from 'styled-components';
import ensnft from './img/ens1.png';
import docs from './img/docs.svg'
import comment from './img/comment.svg'
import { Mypagest, Pagetitle, Box, Minibox, Nft, Icon, Myname, Myaddress, Button } from './mypagest';
import useWalletAddress from '../../hooks/useWalletAddress';
import axios from 'axios';

export const mypage = [];

function Mypage() {
  // const mypage = JSON.parse(localStorage.getItem('mypage')) || [];

  const [mypage, setMypage] = useState([]);
  const location = useLocation();
  const walletAddress = useWalletAddress();
  
  const [commentsCount, setCommentsCount] = useState(0);
  const [postsCount, setPostsCount] = useState(0);
  const [myName, setMyName] = useState();

  useEffect(() => {
    axios.get('http://172.30.1.14:3000/myPage/commentsAll?wallet='+walletAddress)
      .then(response => {
        const count = response.data;
        setCommentsCount(count);
        console.log(response);
        console.log(count);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://172.30.1.14:3000/myPage/postAll?wallet='+walletAddress)
      .then(response => {
        // Access the comments count from the response
        const count = response.data;
        setPostsCount(count);
        console.log(response)
      })
    
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://172.30.1.14:3000/mypage/usingName?wallet='+walletAddress)
      .then(response => {
        console.log(response);
        const eName = response.data[0].name;
        
        setMyName(eName);

        console.log(response);
      })
      
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // useEffect(() => {
  //   const storedMypage = JSON.parse(localStorage.getItem('mypage')) || [];
  //   setMypage(storedMypage);
  // }, []);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const inputValue = searchParams.get('inputValue');

  //   if (inputValue) {
  //     const updatedMypage = [...mypage, inputValue];
  //     setMypage(updatedMypage);
  //     localStorage.setItem('mypage', JSON.stringify(updatedMypage));
  //   }
  // }, [location.search, mypage]);



  return (
  <Mypagest>
    <Pagetitle>
      MYPAGE
    </Pagetitle>
    <hr />
    <Box>
    <h5>INFORMATION</h5>
    <hr/>
    <Myname>{myName}</Myname>
      <Minibox wi='15vw' he='10vw'>
        <Icon src={docs}/><br/>
        <p>POST</p> 
        <p>{postsCount}</p>
      </Minibox>
      <Minibox>
        <Icon src={comment}/><br/>
        <p>COMMENT</p> 
        <p>{commentsCount}</p> 
      </Minibox>

      <Myaddress wi='40vw' he='10vw' dp='block'>
        <p>address</p>
        <p>{walletAddress}</p>
        <Button>Paste Address</Button>
      </Myaddress>
    </Box>
    <Pagetitle>
      COLLECTION
    </Pagetitle>
    <hr />
    <Box>
      <Nft src={ensnft} />
      {mypage.map((item, index) => (<p key={index}>{item}</p>))}
      <Button>Detail</Button>
    </Box>
  </Mypagest>
  );
}

export default Mypage;