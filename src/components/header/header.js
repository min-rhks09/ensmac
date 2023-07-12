import { useNavigate, Link } from 'react-router-dom';
import './header.css'
import styled from 'styled-components'
import logo from './img/logo.png'

const Logo = styled.img`
    width: 3vw;
    height: 2.5vw;
    float: left;
    display:absolute;
    vertical-align: middle;
`;

function Header() {
  return (
    <div className="container pullUp">
        <Logo src={logo}/>
        <Link to='/'>Home</Link>
        <Link to='/makeens'>Make ENS</Link>
        <Link to='/community'>Community</Link>
        <Link to='/marketcap'>MarketCap</Link>
        <Link to='/connectwallet'>Connect Wallet</Link>
    </div>
  );
}

export default Header;