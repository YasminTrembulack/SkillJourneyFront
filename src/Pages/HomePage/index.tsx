import { useState } from "react";
import Card from "../../Components/Card";
import FirstAccessModal from "./Components/FirstAccessModal";
import StyledLink from "../../Components/StyledLink";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";

import TrainingsTemp from '../../Temp/trainings.json'
import NavBarRole from "../../Components/NavBarRole";

export default function HomePage() {

    const [role, serRole] = useState('MANAGER');
    const [firstAccess, setFirstAccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function getTrainings() {
        return TrainingsTemp.data.map(t =>
            <Card data={t}></Card>
        )
    }

    return (
        <>
            <NavBarRole role={role}/>
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
