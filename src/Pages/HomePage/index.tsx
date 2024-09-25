import { useContext, useState } from "react";
import NavBar from "../../Components/NavBar";
import StyledLink from "../../Components/StyledLink";
import { LanguageContext } from "../../Context/language";
import Card from "../../Components/Card";
import FirstAccessModal from "./Components/FirstAccessModal";
import { TrainingContent, MainContent } from "./styles"

import TrainingsTemp from '../../Temp/trainings.json'

export default function HomePage() {

    const [role, serRole] = useState('MANAGER');
    const { getText } = useContext(LanguageContext);
    const [firstAccess, setFirstAccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function getTrainings() {
        return TrainingsTemp.data.map(t =>

            <Card></Card>
        )
    }

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

            <MainContent>
                {firstAccess && <FirstAccessModal />}
                <TrainingContent>

                    {!loading && getTrainings()}
                </TrainingContent>
            </MainContent>
        </>
    );
}
