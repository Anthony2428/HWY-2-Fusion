import styled from "styled-components";
import { GiChefToque } from "react-icons/gi";
import { NavLink as Link } from 'react-router-dom'

export const Icon = styled(GiChefToque)`
    color: #000;
    background-color: inherit;
    margin: auto;
    font-size: 44px;
`;

export const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    height: 46vw;
    width: 100%;
`;
export const PageWrapper = styled.div`
    margin: auto;
`;

export const MenuWrapper = styled.div`
    border-radius: 50px;
    margin: 35px 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #fff;
`;

export const MenuNav = styled.aside`
    width: 35%;
    border-top-style: 2px solid #D8C3A5;
    border-bottom-style: 2px solid #D8C3A5;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 25px;
    margin-top: 25px;
    z-index: 2;
    background-color: #fff;

    @media screen and (max-width: 680px) {
        height: 250px;
        flex-direction: column-reverse;
    }
`;

export const MenuHeading = styled.p`
    text-decoration: none;
    text-align: left;
    background-color: inherit;
    font-size: 13px;    
    font-family: 'Sora', sans-serif;
    padding: 35px;
    border-style: none;
    margin-top: 25px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    height: 1.5rem;

    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #E85A4F;
    }
`;

export const MenuItemWrapper = styled.div`
    margin: auto;
    margin-top: 20px;
    flex: 50%;
    justify-content: space-evenly;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MenuDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 55.5%;
    margin-top: 25px;
    border-left: 2px solid #000;
    background-color: #fff;
`;