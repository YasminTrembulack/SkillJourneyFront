import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';

export const Header = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #27476e;
    color: white;
    padding: 0px 5%;
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
    @media (max-width: 960) {
        padding-right: 2%;
    }
    @media (max-width: 800px) {
        padding-right: 0%;
        gap: 5%;
    }
`

export const Profile = styled(PersonIcon)`
    color: #ECA400;
`;

export const Title = styled.div`
    font-size: 30px;
    text-overflow: initial;
`;