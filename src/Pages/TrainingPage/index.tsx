import { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card";
import { MainContent,TrainingContent, Title, TopContent, Content, Aside } from "./styles";
import { ITraining } from '../../Types/interfaces'
import { LanguageContext } from "../../Context/language";
import { getHeaders } from "../../service/headers";
import { api } from "../../service/api";
import SearchInput from "../../Components/SearchInput";
import AddTrainingButton from "./Components";

export default function TrainingPage() {
    const [trainings, setTrainings] = useState<ITraining[]>([]);
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);

    useEffect(() => {
        fetchTrainings(0, 0);
    }, []);

    async function fetchTrainings(index: number, size: number) {
        setLoading(true);
        const response = await api.get('/training',{
            params:{
                pageIndex: index,
                pageSize: size
            },
            headers: getHeaders()
        }); 
        setTrainings(response.data.data);
        setLoading(false);
    }

    function getTrainings() {
        return trainings.map((treining : ITraining, index: number) =>
            <Card key={index} data={treining}></Card>
        )
    }
    return (
        <>
            <MainContent>
                
                <Content>
                    <TopContent>
                        <Title>{getText('trainings')}</Title>
                        <SearchInput/>
                    </TopContent>
                    <TrainingContent>
                        {!loading && getTrainings()}
                    </TrainingContent>
                </Content>
                
                    <AddTrainingButton/>
                
            </MainContent>
        </>
    );
}
