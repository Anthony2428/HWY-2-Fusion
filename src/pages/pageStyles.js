import styled from "styled-components";
import { GiChefToque } from "react-icons/gi";

export const Icon = styled(GiChefToque)`
    color: #000;
    background-color: inherit;
    margin: auto;
    font-size: 44px;
`;

export const PageWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 90vh;
    margin: auto;
`;

export const MenuWrapper = styled.div`
    display: grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 3fr;
    justify-content: center;
    align-items: center;
    height: 90vh;
    margin: auto;
    width: 85%;
    background-color: #fff;
`;

export const PageHeading = styled.h1`
    color: #000;
    padding: 2.5rem;
`;
export const MenuHeading = styled.h1`
    color: #E85A4F;
    background-color: inherit;
    font-size: 56px;    
    font-family: 'The Nautigal';
`;
export const MenuItem = styled.div`
    text-align: left;
    background-color: inherit;
`;
export const MenuItemT = styled.p`
    color: #E98074;
    font-family: 'Mochiy Pop P One';
    font-size: 14px;
    background-color: inherit;
    text-align: left;
    bottom: 200px;
    padding: 2px;
`;
export const MenuItemD = styled.p`
    color: #8E8D8A;
    background-color: inherit;
    font-size: 12px;
    margin-right: 35px;
`
export const MenuItemP = styled.span`
    color: #8E8D8A;
`;