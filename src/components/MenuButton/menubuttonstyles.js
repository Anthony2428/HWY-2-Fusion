import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonDiv = styled.div`
    
`;
export const Button = styled(Link)`
    margin: auto;
    background-color: #E85A4F;
    color: #fff;

    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #fff;
        background-color: #E85A4F;
    }
`;