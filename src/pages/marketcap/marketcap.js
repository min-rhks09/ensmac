
import { useState, useEffect } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';
import CoinTable from './cointable';

let H1 = styled.h1`
text-align:center;`

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
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then(response => response.json())
      .then(json => {
        setCoins(json.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Check the error response status
        console.log(error.response.status);
      });
  }, []);

  return (
	<Marketcapst>
    <Pagetitle>
        MARKETCAP
    </Pagetitle>
    <hr/>
	<div>
      <div>
        <div>
          <H1>COIN TOP 100</H1>
        </div>
        <div className="result">
          {loading ? (
            <span className="loader">Loading...</span>
          ) : (
            <CoinTable coins={coins} />
          )}
        </div>
      </div>
    </div>
	</Marketcapst>
  );
}

export default Marketcap;