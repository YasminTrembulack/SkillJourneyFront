import { useContext, useState } from "react";
import { MainContent,TrainingContent, Title } from "./styles";
import { useLocation } from "react-router-dom";
import CardContent from "./Components/CardContent";
import AddIcon from '@mui/icons-material/Add';
import TrainingContentTemp from '../../Temp/trainingContent.json'
import { ITrainingContent } from "../../Types/interfaces";
import CircularButton from "../../Components/CircularButton";
import { Content, TopContent } from "../TrainingPage/styles";
import { LanguageContext } from "../../Context/language";
import SubscribeButton from "../../Components/SubscribeButton";


export default function TrainingDetailsPage() {
    // const [firstAccess, setFirstAccess] = useState(false);
    const [loading] = useState(false);
    const { getText } = useContext(LanguageContext);

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
                <Content>
                    <TopContent>
                        <Title>{data.name}</Title>
                        <SubscribeButton text={getText("signUp")}></SubscribeButton>
                    </TopContent>
                    {data.description}
                    <TrainingContent>
                        {!loading && getTrainingsContents()}
                        <p>Aulas</p>
                    </TrainingContent>
                
                </Content>
                        <CircularButton text={getText("addClassroom")}>
                            <AddIcon/>
                        </CircularButton>
            </MainContent>
        </>
    );
}
