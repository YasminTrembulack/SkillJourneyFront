import styled from "styled-components";

export const StyledButton = styled.button`

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #c54ee6;
    color: #fff;
    width: 9.4em;
    height: 3.1em;
    border: #c54ee6 0.2em solid;
    border-radius: 11px;
    text-align: right;
    transition: all 0.6s ease;


    &:hover {
        background-color: #cd21fc;
        border: #cd21fc 0.2em solid;
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