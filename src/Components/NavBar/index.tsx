import { ReactNode, useContext } from "react";
import { Header, Links, Profile,Title } from "./styles";
import { LanguageContext } from "../../Context/language";


export default function NavBar({ children } : { children : ReactNode })
{
    const { language, toggleLanguage } = useContext(LanguageContext);
    return (
        <>
            <Header>
                    <Title>SkillJourney</Title>
                    <Links>
                        {children}
                    </Links>
                    <div>
                        <Profile sx={{ fontSize: 40 }}/>
                        <button onClick={toggleLanguage}>{language}</button>
                    </div>
            </Header>
        </>
    )
}