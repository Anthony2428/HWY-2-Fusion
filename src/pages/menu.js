import React, { useState } from "react";
import { PageWrapper, MenuHeading, MenuNav, MenuItemWrapper, MenuDiv, MenuWrapper } from './pageStyles';
import MenuItem from '../components/MenuItem';
import NavBar from '../components/NavBar';

const Menu = () => {
    
    const [menuTopic, setMenuTopic] = useState([]);

    return (
        <PageWrapper>
             <NavBar/>
                <MenuWrapper>
                    
                <MenuNav>
                    <MenuHeading onClick={() => { setMenuTopic("from-the-griddle"); }} activeStyle>From The Griddle</MenuHeading>
                    <MenuHeading onClick={() => { setMenuTopic("signature-breakfast"); }} activeStyle>Signature Breakfast</MenuHeading>
                    <MenuHeading onClick={() => { setMenuTopic("three-egg-omelettes"); }} activeStyle>Three Egg Omeletes</MenuHeading>
                    <MenuHeading onClick={() => { setMenuTopic("signature-fusion"); }} activeStyle>Signature Fusion</MenuHeading>
                    <MenuHeading onClick={() => { setMenuTopic("south-of-the-border"); }} activeStyle>South of the Border</MenuHeading>
                    <MenuHeading onClick={() => { setMenuTopic("fusion-sandwiches"); }} activeStyle>Fusion Sandwiches</MenuHeading>
                    <MenuHeading onClick={() => { setMenuTopic("fusion-sides"); }} activeStyle>Fusion Sides</MenuHeading>
                </MenuNav>
                <MenuDiv>
                    <MenuItemWrapper>
                        <MenuItem menuTopic={menuTopic}/>
                    </MenuItemWrapper>
                </MenuDiv>
                </MenuWrapper>
        </PageWrapper>
    )
}
export default Menu; 