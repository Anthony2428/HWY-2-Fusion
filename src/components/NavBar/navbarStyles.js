import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars, FaBorderNone} from 'react-icons/fa'

export const Nav = styled.nav`
    background-color: #EAE7DC;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
`;
export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.9rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;


    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #E85A4F;
        text-decoration: none;
    }
`

export const Bars = styled(FaBars)`
    color: #000;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #E85A4F;
            text-decoration: none;
            font-weight: bold;
        }
`
export const Logo = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`