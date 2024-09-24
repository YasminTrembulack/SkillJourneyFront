import { ReactNode } from "react";
import { Header, Links, Profile,Title } from "./styles";


export default function NavBar({ children } : { children : ReactNode })
{
    return (
        <>
            <Header>
                    <Title>SkillJorney</Title>
                    <Links>
                        {children}
                    </Links>
                    <Profile sx={{ fontSize: 40 }}/>
            </Header>
        </>
    )
}