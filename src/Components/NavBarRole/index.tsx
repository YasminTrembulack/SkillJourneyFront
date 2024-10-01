import { useContext } from "react";
import { LanguageContext } from "../../Context/language";
import NavBar from "../NavBar";
import StyledLink from "../StyledLink";
import { UserContext } from "../../Context/user";

export default function NavBarRole()
{
    const { getText } = useContext(LanguageContext);
    const { currentUser } = useContext(UserContext);
    return (
        <>
            {   currentUser === null ? <></> :
                currentUser.role === "EMPLOYEE" ?
                <NavBar>
                    <StyledLink to="/home" text={getText("home")}></StyledLink>
                    <StyledLink to="/training" text={getText("training")}></StyledLink>
                    <StyledLink to="/profile" text={getText("profile")}></StyledLink>
                </NavBar>
            
            
                : currentUser.role === "MANAGER" ?
                <NavBar>
                    <StyledLink to="/home" text={getText("home")}></StyledLink>
                    <StyledLink to="/training" text={getText("training")}></StyledLink>
                    <StyledLink to="/employee" text={getText("employee")}></StyledLink>
                    <StyledLink to="/profile" text={getText("profile")}></StyledLink>
                    <StyledLink to="/skill" text={getText("skill")}></StyledLink>
                </NavBar>
            
            
                : currentUser.role === "ADM" ?
                <NavBar>
                    <StyledLink to="/home" text={getText("home")}></StyledLink>
                    <StyledLink to="/training" text={getText("training")}></StyledLink>
                    <StyledLink to="/employee" text={getText("employee")}></StyledLink>
                    <StyledLink to="/skill" text={getText("skill")}></StyledLink>
                </NavBar>
                :<></>
            }
        </>
    )
}