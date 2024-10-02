import styled from "styled-components"

export const Header = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #27476e;
    padding: 0px 5%;

    @media (max-width: 960px) {
        padding: 0px 3%;
    }
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15%;
    padding-right: 6%;

    @media (max-width: 1120px) {
        padding-right: 4%;
        gap: 10%;
    }
    @media (max-width: 960px) {
        padding-right: 2%;
        gap: 6%;
    }
    @media (max-width: 800px) {
        padding-right: 0%;
        gap: 3%;
    }
`

export const Title = styled.div`
    font-size: 30px;
    text-overflow: initial;
    color: white;
`;

export const RightContainer = styled.div`
    display:flex;
    gap: 30px;
    align-items:center;
`;