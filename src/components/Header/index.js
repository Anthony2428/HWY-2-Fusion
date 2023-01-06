import React from "react";
import styled from 'styled-components'

const AddressDiv = styled.div`
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  height: 20px;
  top: 0px;
  background-color: #000;
  width: 100vw;
  text-align: center;
  justify-content: center;
`;
const Address = styled.a`
  text-decoration: none;
  padding: 5px;
  color: #BAB2B5;
  font-size: 12px;
`;

const PhoneNumber = styled.a`
  text-decoration: none;
  margin-left: 20px;
  color: #BAB2B5;
  font-size: 12px;
`;
const Header = () => {
  return (
      <AddressDiv>
        <span><Address href='https://maps.apple.com/?address=19721%20US-2,%20Monroe,%20WA%20%2098272,%20United%20States&auid=2495863864162765299&ll=47.858758,-121.966088&lsp=9902&q=HWY%202%20Fusion%20Diner&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKRasJ5pY7UdAMfDeYA5Cfl7AOZSBTfZ+7kdAQZbq87JmfV7AUAM%3D' target="_blank" rel="noopener noreferrer">19721 State Rte 2 Ste #B Monroe, WA 98272 </Address></span>
        <span><PhoneNumber href="tel:360-217-8564">(360) 217-8564</PhoneNumber></span>
      </AddressDiv>
  );
}

export default Header;