import styled from "styled-components";

export const StyledButton = styled.button`

    background-color: #B86ECC;
    color: #fff;
    width: 8.5em;
    height: 2.9em;
    border: #9C7CA5 0.2em solid;
    border-radius: 11px;
    text-align: right;
    transition: all 0.6s ease;
    gap: 20px;


    &:hover {
        background-color: #d85cfa;
        border: #d85cfa 0.2em solid;
        cursor: pointer;
    }

    & svg {
        width: 1.6em;
        margin: -0.2em 0.8em 1em;
        position: absolute;
        display: flex;
        transition: all 0.6s ease;
    }

    &:hover svg {
    transform: translateX(5px);
    }

`;

export const Text = styled.div`
  margin: 0 1.5em
`;