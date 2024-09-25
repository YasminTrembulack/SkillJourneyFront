import { useContext, useState } from "react";
import { LanguageContext } from "../../Context/language";
import { TrainingContent, MainContent, Title } from "./styles"
import FirstAccessModal from "./Components/FirstAccessModal";
import StyledLink from "../../Components/StyledLink";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";

import TrainingsTemp from '../../Temp/trainings.json'

export default function HomePage() {

    const [role, serRole] = useState('MANAGER');
    const { getText } = useContext(LanguageContext);
    const [firstAccess, setFirstAccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function getTrainings() {
        return TrainingsTemp.data.map(t =>
            <Card data={t}></Card>
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
                <Title>Treinamentos</Title>
                {firstAccess && <FirstAccessModal />}
                <TrainingContent>

                    {!loading && getTrainings()}
                </TrainingContent>
            </MainContent>
        </>
    );
}
