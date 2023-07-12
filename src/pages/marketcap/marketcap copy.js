import { useState, useEffect } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';


let Marketcapst =  styled.div`
  color: #ffffff;
  font-size: 40px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top:2vw;
  padding-bottom: 2vw;
  background-color: #070617;
`
let Pagetitle = styled.div`
  font-weight: 500;
`

function Marketcap() { 
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then(response => response.json())
      .then(json => {
      setCoins(json.slice(0, 100)); // 가져온 데이터 1~100위 담기
      setLoading(false); // 로딩 멈추기
    });
  }, [])
return(
  <Marketcapst>
    <Pagetitle>
        MARKETCAP
    </Pagetitle>
    <hr/>
  </Marketcapst>
  );
}

export default Marketcap;