import { useState, useEffect } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import { Makeensst, Pagetitle, Input, Button, Form, H1, P} from './makeensst';
import Detail from './detail';
import styled from 'styled-components';


//user flow: 로그인 with 778 chain - ens page - ens조회 - ens기사용 여부 표시 - 사용가능 - 입력한 ens와 지갑주소 전송 - 둔 ens등록완료 - 마이페이지 이동


function Makeens() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue && inputValue.length >= 6 && inputValue.length <= 14 && inputValue.endsWith('.eth')) {
      const url = new URL('https://1d61-119-192-224-93.ngrok-free.app/search/ens');
      const params = { ensName: encodeURIComponent(inputValue) };
      url.search = new URLSearchParams(params).toString();
    
      const apiUrl = url.toString();
      
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {  if(data.address == "0x0000000000000000000000000000000000000000" && inputValue && inputValue.length >= 6 && inputValue.length <= 14 && inputValue.endsWith('.eth')){
          alert("사용가능한 이름입니다")
          console.log(data);
          navigate(`/detail?inputValue=${encodeURIComponent(inputValue)}`);}
          else{  alert('사용불가한 이름입니다 조건 확인해주세요')}
        })
        .catch(error => {
          console.error('Error:', error);
        });
      // 데이터를 백엔드에 전송

     }else {
       // 조건을 충족하지 않을 경우 경고 표시
       alert('사용불가한 이름입니다 조건을 확인해주세요');
    }
  };


  return (
    <Makeensst>
      <Pagetitle>
        MAKE ENS
      </Pagetitle>
      <hr />
      <br/>
      <H1>Search ENS</H1>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder='Enter your ENS' value={inputValue} onChange={handleInputChange} />
        <Button type="submit">Search</Button>
      </Form>
      <P>RULE</P>
      <P>- Must only be between 6 and 14 characters.</P>
      <P>- 6글자에서 14글자 사이로만 입력해주세요</P>
      <br/>
      <P>- Must include '.eth'</P>
      <P>- 반드시 '.eth'를 포함해주새요</P>
    </Makeensst>
  );
}

export default Makeens;

