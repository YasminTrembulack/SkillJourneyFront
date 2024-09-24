import { useContext, useState } from "react";
import NavBar from "../../Components/NavBar";
import StyledLink from "../../Components/StyledLink";
import { LanguageContext } from "../../Context/language";

export default function HomePage() {

    const [role, serRole] = useState('MANAGER');
    const { getText } = useContext(LanguageContext);

    return (
    <>
        {
            role === "EMPLOYEE" &&
            <NavBar>
                <StyledLink to="/" text={getText("training")}></StyledLink>
                <StyledLink to="/" text={getText("profile")}></StyledLink>
            </NavBar> 
        }
        {
            role === "MANAGER" &&
            <NavBar>
                <StyledLink to="/" text={getText("training")}></StyledLink>
                <StyledLink to="/" text={getText("employee")}></StyledLink>
                <StyledLink to="/" text={getText("profile")}></StyledLink>
                <StyledLink to="/" text={getText("skill")}></StyledLink>
            </NavBar>
        }
        {
            role === "ADM" &&
            <NavBar>
                <StyledLink to="/" text={getText("training")}></StyledLink>
                <StyledLink to="/" text={getText("employee")}></StyledLink>
                <StyledLink to="/" text={getText("skill")}></StyledLink>
            </NavBar>
        }
        
    </>
  );
}
