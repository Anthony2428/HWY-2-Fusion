import React, {useEffect, useState} from "react";
import { Card, MenuWrapper, ImageWrapper, DescriptionWrapper, ItemTitle, OrderButton } from "./menuitemStyles";
import data from "./menu.json";

const MenuItem = () => {
  const [menuItems, setMenuItems] = useState([]);
  
  const getMenuData = () => {
      let filteredResults = data.filter(obj => {
        if (obj.menuID === 'signature-breakfast') {
          return true;
        }
        return false;
      });
      setMenuItems(filteredResults)
    };

    useEffect(()=>{
      getMenuData()
    },[])
    console.log(menuItems)
  const allJSX = menuItems.map(item => {

    return (
      <MenuWrapper>
        <Card>
          <ImageWrapper />
          <DescriptionWrapper>
            <ItemTitle>{item.name}</ItemTitle>
          </DescriptionWrapper>
          <OrderButton />
        </Card>
      </MenuWrapper>
    )});

    return allJSX;
}

export default MenuItem;