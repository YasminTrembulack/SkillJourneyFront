import { ReactNode } from "react";
import { Header, Links, Profile,Title, RightContainer } from "./styles";
import ToggleButtonLang from '../ToggleButtonLang'


export default function NavBar({ children } : { children : ReactNode })
{
    return (
        <Header>
            <Title>SkillJourney</Title>
            <Links>
                {children}
            </Links>
            <RightContainer>
                <Profile sx={{ fontSize: 40 }}/>
                <ToggleButtonLang></ToggleButtonLang>
            </RightContainer>
        </Header>
    )
}