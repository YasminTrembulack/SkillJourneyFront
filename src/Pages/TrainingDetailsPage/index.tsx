import { useState } from "react";
import { MainContent,TrainingContent, Title } from "./styles";
import { useLocation } from "react-router-dom";
import CardContent from "./Components/CardContent";

import TrainingContentTemp from '../../Temp/trainingContent.json'
import { ITrainingContent } from "../../Types/interfaces";


export default function TrainingDetailsPage() {
    // const [firstAccess, setFirstAccess] = useState(false);
    const [loading, setLoading] = useState(false);
    // const { getText } = useContext(LanguageContext);

    const location = useLocation();
    const { data } = location.state;

    function getTrainingsContents() {
        return TrainingContentTemp.data
            .filter((trainingContent: ITrainingContent) => trainingContent.trainingId === data.id)
            .map((filteredContent: ITrainingContent) => (
                <CardContent key={filteredContent.id} data={filteredContent} />
            ));
    }
    
    
    return (
        <>
            <MainContent>
                <Title>{data.name}</Title>
                <TrainingContent>
                    {!loading && getTrainingsContents()}
                </TrainingContent>
            </MainContent>
        </>
    );
}
