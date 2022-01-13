import React from "react";
// import HWYLogo from "../../images/HWY.svg";
import { NavLink, Nav, Bars, NavMenu } from './navbarStyles';

const NavBar = () => {

  return (
    <Nav>
    <Bars />
      <NavMenu>
        <NavLink to='/' activeStyle>Home</NavLink>
        <NavLink to='menu' activeStyle>Menu</NavLink>
        <NavLink to='directions' activeStyle>Directions</NavLink>
        <NavLink to='contact' activeStyle>Contact</NavLink>

        {/* <Logo>
          <NavLink to='' activeStyle>
          
          <img src={HWYLogo} alt='HWY2Fusion'/>
          </NavLink>
        </Logo> */}
        </NavMenu>
    </Nav>

  );
}

export default NavBar;