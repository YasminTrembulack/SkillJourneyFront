
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    position: relative;
    background-color: black; 

    &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: 0; 
        left: 0; 
        background-color: #f3aa00; 
    }

    &:hover::after {
        width: 100%; 
    }
`;
