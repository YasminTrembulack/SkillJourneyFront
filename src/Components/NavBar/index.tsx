import { ReactNode } from "react";
import { Header, Links,Title, RightContainer } from "./styles";
import ProfileAvatar from "../ProfileAvatar";
import SelectLanguage from "../SelectLanguage";


export default function NavBar({ children } : { children : ReactNode })
{
    return (
        <Header>
            <Title>SkillJourney</Title>
            <Links>
                {children}
            </Links>
            <RightContainer>
                <SelectLanguage/>
                <ProfileAvatar/>
            </RightContainer>
        </Header>
    )
}