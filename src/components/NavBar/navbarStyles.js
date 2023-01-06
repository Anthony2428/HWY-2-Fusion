import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaBars, FaBorderNone, VscTriangleDown, VscTriangleUp} from 'react-icons/fa'

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
    height: 95px;
    background-color: #fff;
    width: 85%;
    border-radius: 50px;
    margin: auto;
    z-index: 6;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
    overflow: hidden;
`;
export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.5rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    background-color: #fff;
    justify-content: center;
    font-size: 20px;


    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #E85A4F;
        text-decoration: none;
    }
`
export const NavBItem = styled(Link)`
    color: #fff;
    display: none;
    align-items: center;
    text-decoration: none;
    padding: 1.9rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;

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
    }
`

export const Bars = styled(FaBars)`
    color: #fff;
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
    width: 69px;
    height: 69px;
    background-color: #fff;
    position: relative;
    margin-left: 75px;
    margin-right: 75px;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    background-color: #fff;


    @media screen and (max-width: 768px) {
        display: none;
    }
`