import { useContext } from "react";
import { LanguageContext } from "../../Context/language";
import NavBar from "../NavBar";
import StyledLink from "../StyledLink";

export default function NavBarRole({role}: { role: string})
{
    const { getText } = useContext(LanguageContext);
    return (
        <>
            {
                role === "EMPLOYEE" &&
                <NavBar>
                    <StyledLink to="/home" text={getText("training")}></StyledLink>
                    <StyledLink to="/" text={getText("profile")}></StyledLink>
                </NavBar>
            }
            {
                role === "MANAGER" &&
                <NavBar>
                    <StyledLink to="/home" text={getText("training")}></StyledLink>
                    <StyledLink to="/" text={getText("employee")}></StyledLink>
                    <StyledLink to="/" text={getText("profile")}></StyledLink>
                    <StyledLink to="/skill" text={getText("skill")}></StyledLink>
                </NavBar>
            }
            {
                role === "ADM" &&
                <NavBar>
                    <StyledLink to="/home" text={getText("training")}></StyledLink>
                    <StyledLink to="/" text={getText("employee")}></StyledLink>
                    <StyledLink to="/skill" text={getText("skill")}></StyledLink>
                </NavBar>
            }
        </>
    )
}