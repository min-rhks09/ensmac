import styled, { css } from 'styled-components';

export let Mypagest =  styled.div`
  color: #ffffff;
  font-size: 40px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top:2vw;
  padding-bottom: 2vw;
  background-color: #070617;
`
export let Pagetitle = styled.div`
  font-weight: 500;

`
export let Box = styled.div`
  background-color:#455368;
  padding: 2vw 2vw 2vw 2vw;
  border-radius: 20px;
  margin-top: 5vw;
  margin-bottom: 5vw;
`

export let Minibox =styled.div`
  border-radius: 10px;
  border: 0.1vw solid #D6EF0E;
  font-size:2vw;
  text-align:center;
  padding: 1vw 1vw 1vw 1vw;
  dispaly: {props => props.dp};
  margin: 1vw 2vw 2vw 2vw;
  width: {props => props.wi};
  height: {props => props.he};
`

export let Myaddress =styled.div`
  border-radius: 10px;
  border: 0.1vw solid #D6EF0E;
  font-size:2vw;
  text-align: center;
  padding: 1vw 1vw 1vw 1vw;
  dispaly: {props => props.dp};
  margin: 2vw 2vw 2vw 2vw;
  width: {props => props.wi};1
  height: {props => props.he};
`

export let Myname =styled.div`
  text-align: center;
  display:block;
  font-size: 5vw;
  margin-top: 3vw
`

export let Icon =styled.img`
  width:2vw;
  height:2vw;
  `

export let Nft = styled.img`
  width: 15vw;
  height: 15vw;
  display:absolute;
  vertical-align: middle;
  display: flex;
`

export let Button =styled.button`
  background-color: #D6EF0E;
  border: 0.5vw solid #D6EF0E;
  border-radius: 10px;
  color: #ffffff;
  padding: 1vw 2vw 1vw 2vw;
  font-size: 2vw;
`