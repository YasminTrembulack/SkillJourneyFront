import { useContext, useState } from "react";
import FirstAccessModal from "./Components/FirstAccessModal";
import Card from "../../Components/Card";
import { MainContent,TrainingContent, Title } from "./styles";

import TrainingsTemp from '../../Temp/trainings.json'
import NavBarRole from "../../Components/NavBarRole";
import { ITraining } from '../../Types/interfaces'
import { LanguageContext } from "../../Context/language";


export default function TrainingPage() {

    const [role, serRole] = useState('MANAGER');
    const [firstAccess, setFirstAccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);

    function getTrainings() {
        return TrainingsTemp.data.map((treining : ITraining) =>
            <Card data={treining}></Card>
        )
    }
    return (
        <>
            <NavBarRole role={role}/>
            <MainContent>
                <Title>{getText('trainings')}</Title>
                {firstAccess && <FirstAccessModal />}
                <TrainingContent>
                    {!loading && getTrainings()}
                </TrainingContent>
            </MainContent>
        </>
    );
}
