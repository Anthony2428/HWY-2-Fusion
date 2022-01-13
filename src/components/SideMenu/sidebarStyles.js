import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as sideLink } from 'react-scroll';
import { Link as sideLinkR } from 'react-router-dom';

export const sidebarWrapper = styled.div`
    color: #e85a4f;
`;

export const sidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const sidemenuContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: senter;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const closeIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const sidemenuLinks = styled(sideLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3 ease-in-out;

    &:hover {
        transition: ease-in-out all .4s; 
        -moz-transition: ease-in-out all .4s;
        -webkit-transition: ease-in-out all .4s;
        color: #E85A4F;
        text-decoration: none;
        font-weight: bold;
    }
`;

export const sideBarRoute = styled(sideLinkR)`
    border-radius: 50px;
    background-color: #EAE7DC;
    white-space: nowrap;
    padding: 16px 64px;
    color: #e85a4f;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: ease-in-out all .4s; 
        -moz-transition: ease-in-out all .4s;
        -webkit-transition: ease-in-out all .4s;
        color: #E85A4F;
        text-decoration: none;
        font-weight: bold;
    }
`
