import styled from 'styled-components'




export let Homest =  styled.div`
    background-color: #070617;
    color: #ffffff;
    font-size: 40px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top:2vw;
    padding-bottom: 2vw;

    transition: 0.3s ease-out;
    overflow-x: hidden;
    overscroll-behavior: none;
`

export let Title = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 10vw;
    font-weight: bold;
    background-color:#070617;
    color:#FFF;
`


export let Button = styled.button`
  background: rgb(255,151,0);
  border: none;
  z-index: 1;
  &:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #eaf818;
  background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
&:hover {
  color: #000;
}
&:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
&:active {
  top: 2px;
}
`