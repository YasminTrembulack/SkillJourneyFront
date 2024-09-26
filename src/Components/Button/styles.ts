import styled from "styled-components";

export const StyledButton = styled.button`

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #5e3efc;
    color: #fff;
    width: 9.4em;
    height: 3.1em;
    border: #5e3efc 0.2em solid;
    border-radius: 11px;
    text-align: right;
    transition: all 0.6s ease;


    &:hover {
        background-color: #7257fa;
        border: #7257fa 0.2em solid;
        cursor: pointer;
    }

    & svg {
        width: 1.6em;
        display: flex;
        transition: all 0.6s ease;
    }

    &:hover svg {
        transform: translateX(5px);
    }

`;

export const Text = styled.div`
    font-size: 18px;
    
`;