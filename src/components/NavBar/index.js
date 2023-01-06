import React from "react";
import HWYLogo from "../../images/HWY.png";
import { NavLink, Nav, Bars, NavMenu } from './navbarStyles';
import { Logo } from "./navbarStyles";
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (
    <Nav>
    <Bars />
      <NavMenu>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='menu'>Menu</NavLink>
        <Logo>
          <NavLink to='/' activeStyle>
          
          <img src={HWYLogo} alt='HWY2Fusion'/>
          </NavLink>
        </Logo>
        <NavLink to='directions'>Directions</NavLink>
        <NavLink to='contact'>Contact</NavLink>

        </NavMenu>
    </Nav>

  );
}

export default NavBar;