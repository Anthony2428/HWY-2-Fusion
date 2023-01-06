import React, {useEffect, useState} from "react";
import { Card, MenuWrapper, DescriptionWrapper, ItemTitle, ItemDescription, Price } from "./menuitemStyles";
import data from "./menu.json";

const MenuItem = ({menuTopic}) => {
  console.log(menuTopic)
  const [menuItems, setMenuItems] = useState([]);

  const getMenuData = () => {
      let filteredResults = data.filter(obj => {
        if (obj.menuID === menuTopic) {
          return true;
        }
        return false;
      });
      setMenuItems(filteredResults)
    };

    useEffect(()=>{
      getMenuData()
    },[menuTopic])
    
    console.log(menuItems)
  const allJSX = menuItems.map(item => {
    
    return (
      <MenuWrapper>
        <Card>
          <DescriptionWrapper>
            <ItemTitle>{item.name}
              <Price>{item.price}</Price>
            </ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </DescriptionWrapper>
        </Card>
      </MenuWrapper>
    )});

    return allJSX;
}

export default MenuItem;