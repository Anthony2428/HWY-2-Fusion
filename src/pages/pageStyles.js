import styled from "styled-components";
import { GiChefToque } from "react-icons/gi";
import { NavLink as Link } from 'react-router-dom'

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
    padding: 15px;
    height: 70px;

    @media screen and (max-width: 680px) {
        height: 250px;
        flex-direction: column-reverse;
    }
`;

export const MenuHeading = styled(Link)`
    text-decoration: none;
    margin: auto;
    background-color: inherit;
    font-size: 13px;    
    font-family: 'Sora', sans-serif;
    border-style: none;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;

    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        border-top: 2px solid #E85A4F;
        border-bottom: 2px solid #E85A4F;
    }
`;

export const MenuItemWrapper = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 80%;
    justify-content: space-evenly;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
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