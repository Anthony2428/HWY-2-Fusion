import React from 'react';
import { MenuWrapper, PageWrapper, PageHeading, MenuHeading, Icon, MenuItem, MenuItemT, MenuItemD } from './pageStyles';

const Menu = () => {
    return (
        <PageWrapper>
            <PageHeading>Menu</PageHeading>

            <MenuWrapper>
                <Icon />
                <MenuHeading>From the Griddle</MenuHeading>
                <Icon />
                <MenuItem>
                    <MenuItemT>Blueberry Pancake Combo</MenuItemT>
                    <MenuItemD>Two large fluffy blueberry pancakes served with two eggs your style, choice of bacon, sausage link, patty sausage or ham, and hash browns or homemade seasoned potatoes.</MenuItemD>
                </MenuItem>
                <MenuItem>
                    <MenuItemT>Chocolate Chip Pancake Combo</MenuItemT>
                </MenuItem>
                <MenuItem>
                    <MenuItemT>Caramel Pecan Pancake Combo</MenuItemT>
                </MenuItem>
            </MenuWrapper>
            <MenuWrapper>
                <Icon />
                <MenuHeading>Signature Breakfast and Egg Dishes</MenuHeading>
                <Icon />
            </MenuWrapper>
            <MenuWrapper>
                <Icon />
                <MenuHeading>Three Egg Omelettes</MenuHeading>
                <Icon />
            </MenuWrapper>
            <MenuWrapper>
                <Icon />
                <MenuHeading>Fusion Sandwiches</MenuHeading>
                <Icon />
            </MenuWrapper>
            <MenuWrapper>
                <Icon />
                <MenuHeading>Signature Fusion</MenuHeading>
                <Icon />
            </MenuWrapper>
            <MenuWrapper>
                <Icon />
                <MenuHeading>South of the Border</MenuHeading>
                <Icon />
            </MenuWrapper>
            <MenuWrapper>
                <Icon />    
                <MenuHeading>Del Mar</MenuHeading>
                <Icon />
            </MenuWrapper>
        </PageWrapper>
    )
}
export default Menu;