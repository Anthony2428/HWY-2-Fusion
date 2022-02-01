import styled from "styled-components";

export const MenuWrapper = styled.div`
  padding: 15px !important;
  display: inline-flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 15px !important;
  border: 1px solid #D8C3A5;
  background-color: white;
  border-radius: 10%;
  height: 200px;
  width: 320px;
`;

export const ImageWrapper = styled.div`
  float: right; 
  width: 135px;
  height: 120px;
  border-radius: 42%;
  position: relative;
  bottom: 13px;
  left: 13px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ItemTitle = styled.h1`
    font-size: 14px;    
    font-family: 'Sora', sans-serif;
    color: #000;
    font-weight: bold;
    padding: 2px;
`;
export const OrderButton = styled.button`
    position: relative;
    bottom: 49px;
    left: 85px;
    width: 135px;
    height: 50px;
    border-radius: 15%;
    border: none;
`;