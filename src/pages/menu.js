import React from 'react';
import { PageWrapper, MenuHeading, Icon, MenuNav, MenuItemWrapper } from './pageStyles';
import MenuItem from '../components/MenuItem';

const Menu = () => {
    return (
        <PageWrapper>
                {/* <Icon /> */}
                <MenuNav>
                    <MenuHeading to='signature-breakfast' activeStyle>Signature Breakfast</MenuHeading>
                    <MenuHeading to='three-egg-omeletes' activeStyle>Three Egg Omeletes</MenuHeading>
                    <MenuHeading to='signature-fusion' activeStyle>Signature Fusion</MenuHeading>
                    <MenuHeading to='fusion-sandwiches' activeStyle>Fusion Sandwiches</MenuHeading>
                    <MenuHeading to='fusion-sides' activeStyle>Fusion Sides</MenuHeading>
                </MenuNav>
                <MenuItemWrapper>
                    <MenuItem />
                </MenuItemWrapper>
        </PageWrapper>
    )
}
export default Menu;