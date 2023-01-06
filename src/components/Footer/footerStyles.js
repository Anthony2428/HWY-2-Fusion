import styled from 'styled-components'
import {FaFacebook, FaYelp} from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

export const FooterDiv = styled.nav`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    height: 180px;
    background-color: #000000cf;
    width: 100vw;
    padding-top: 50px;
    padding-bottom: 55px;
`;

export const Footnote = styled.h1`
    padding: 5px;
    color: #BAB2B5;
    font-size: 12px;
`;
export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    align-items: center;
    padding: 2.5rem;
`;

export const FBIcon = styled(FaFacebook)`
    cursor: pointer;
    
    &:hover {
        transition-property: color;
        transition-timing-function: ease-in;
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #1877F2;
    }
`;
export const YelpIcon = styled(FaYelp)`
    cursor: pointer;
    
    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #D32323;
    }
`;
export const MapIcon = styled(SiGooglemaps)`
    cursor: pointer;
    
    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #4285F4;
    }
`;