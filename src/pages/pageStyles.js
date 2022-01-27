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
    margin-top: 20px;
`;

export const MenuNav = styled.div`
    border-top-style: 2px solid #D8C3A5;
    border-bottom-style: 2px solid #D8C3A5;
    justify-content: space-evenly;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`
export const MenuHeading = styled.a`
    color: #E85A4F;
    background-color: inherit;
    font-size: 14px;    
    font-family: 'Sora', sans-serif;
    border-style: none;
    padding: 15px;
`;

/* font-family: 'Mochiy Pop P One'; */
export const MenuItemD = styled.p`
    color: #8E8D8A;
    background-color: inherit;
    font-size: 12px;
    margin-right: 35px;
`
export const MenuItemP = styled.span`
    color: #8E8D8A;
`;