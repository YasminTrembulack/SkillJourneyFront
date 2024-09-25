import { useState } from "react";
import Card from "../../Components/Card";
import FirstAccessModal from "./Components/FirstAccessModal";
import { TrainingContent, MainContent } from "./styles"

import TrainingsTemp from '../../Temp/trainings.json'
import NavBarRole from "../../Components/NavBarRole";

export default function HomePage() {

    const [role, serRole] = useState('MANAGER');
    const [firstAccess, setFirstAccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function getTrainings() {
        return TrainingsTemp.data.map(t =>

            <Card></Card>
        )
    }

    return (
        <>
            <NavBarRole role={role}/>
            <MainContent>
                {firstAccess && <FirstAccessModal />}
                <TrainingContent>

                    {!loading && getTrainings()}
                </TrainingContent>
            </MainContent>
        </>
    );
}
