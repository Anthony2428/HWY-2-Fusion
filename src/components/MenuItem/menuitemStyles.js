import styled from "styled-components";

export const MenuWrapper = styled.div`
  padding: 15px !important;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fff;
`;

export const Card = styled.div`
  padding: 5px !important;
  width: 100%;
  background-color: inherit;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: inherit;
`;
export const ItemTitle = styled.h2`
  font-size: 20px;    
  font-family: 'Sora', sans-serif;
  color: #000;
  font-weight: bold;
  text-align: left;
  background-color: inherit;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  color: #8e8d8a;
  text-align: left;
  padding-top: .25rem;
  width: 70%;
  background-color: inherit;
`;
export const ItemNote = styled.p`
  font-size: 12px;
  font-family: 'Sora', sans-serif;
  color: #8e8d8a;
  text-align: left;
  padding-top: .25rem;
  width: 70%;
  background-color: inherit;
`;
export const Price = styled.span`
  font-size: 20px;
  font-family: 'Sora', sans-serif;
  float: right;
  background-color: inherit;
`;