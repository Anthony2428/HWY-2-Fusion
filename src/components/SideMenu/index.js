import React from "react";
import { sidemenuContainer,
        Icon,
        closeIcon,
        sidebarWrapper, 
        sidebarMenu,
        sidemenuLinks,
        sideBarRoute } from "./sidebarStyles";

const SideMenu = () => {

  return (
      <sidemenuContainer>
            <Icon>x
                <closeIcon />
            </Icon>
            <sidebarWrapper>
                <sidebarMenu>
                    <sidemenuLinks to='/'>
                        Home
                    </sidemenuLinks>
                    <sidemenuLinks to='menu'>
                        Menu
                    </sidemenuLinks>
                    <sidemenuLinks to='directions'>
                        Directions
                    </sidemenuLinks>
                    <sidemenuLinks to='contact'>
                        Contact
                    </sidemenuLinks>
                </sidebarMenu>
            </sidebarWrapper>
        </sidemenuContainer>
  );
}

export default SideMenu;