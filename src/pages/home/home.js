import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Homest, Button, Title} from './homest'
import './home.module.css'


export let Content = styled.div`
  display: inline-block;
`

export let Img = styled.img`
  width: 50%
  height: 50%
`
function Home(){
  const ensLeft = ['76eth.eth', 'bitcoin.eth', 'hello.eth', '😺😸😹😻😼😽🙀😿😾.eth','city1.eth','dogworlds.eth','classicart.eth','pepe-frog.eth',];
  const ensRight = ['👍👍👍.eth', 'digital.eth', 'no3.eth', 'jeju.eth', 'party.eth', '0000.eth', 'game.eth', 'o_o.eth', '010203.eth', 'apple.eth', '^-^.eth'];

  const marqueeLeft = ensLeft.map((element, index) => (
    <span key={index}>{element}&nbsp;&nbsp;&nbsp;</span>
  ));

  const marqueeRight = ensRight.map((element, index) => (
    <span key={index}>{element}&nbsp;&nbsp;&nbsp;</span>
  ));
 
  return(
    <>
    <Title>MAKE YOUR ENS</Title>
    <Homest>
    <marquee direction="left"> {marqueeLeft}</marquee>
    <marquee direction="right">{marqueeRight}</marquee>
          <Content>
            <Img src='https://media.giphy.com/media/kB1an6hzdTgUKfRypR/giphy.gif' alt="Person 1" />
              <div>
                <h3>MAKE ENS PAGE</h3>
                <p>Search for ENS & Create your own awesome ENS</p>
              </div>
          </Content>
          <Content>
            <Img src="https://media.giphy.com/media/MkvZFvzHIWbRK/giphy.gif"alt="Person 3" />
              <div>
                <h3>COMMUNITY PAGE</h3>
                <p>Show off your assets & Communicate with people</p>
              </div>
          </Content>
          <Content>
            <Img src="https://media.giphy.com/media/Opgs8NUosTAnRSFYzc/giphy.gif" alt="Person 2" />
              <div>
                <h3>MARKETCAP PAGE</h3>
                <p>Find Out Which Coin Are You Investing In or Interested In</p>
              </div>
          </Content>  
    </Homest>
    </>
)}
export default Home;