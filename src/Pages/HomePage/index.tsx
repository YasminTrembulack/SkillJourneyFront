import { useContext, useEffect, useState } from "react";
import FirstAccessModal from "./Components/FirstAccessModal";
import { MainContent, Title, HomeContent, Welcome, ObjectiveContent, RecentTrainings, TitleObjective, ObjectiveText } from "./styles";
import { LanguageContext } from "../../Context/language";
import { UserContext } from "../../Context/user";
import { api } from "../../service/api";
import { getHeaders } from "../../service/headers";
import { ITraining } from "../../Types/interfaces";
import CardHome from "../../Components/CardHome";
import { log } from "console";


export default function HomePage() {
    const [trainings, setTrainings] = useState<ITraining[]>([]);
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);
    const { firstAccess, currentUser } = useContext(UserContext);

    useEffect(() => {
        fetchTrainings(0, 0);
    }, []);

    async function fetchTrainings(index: number, size: number) {
        setLoading(true);
        const response = await api.get(`/employee-training/employee/${currentUser?.employeeId}`, {
            params: {
                pageIndex: index,
                pageSize: size
            },
            headers: getHeaders()
        });
        console.log(response.data);
        
        setTrainings(response.data.trainings);
        setLoading(false);
    }

    function getTrainings() {
        if (trainings)
            return trainings.map((treining: ITraining, index: number) =>
                <CardHome key={index} data={treining}></CardHome>
            )
    }
    return (
        <>
            <MainContent>
                <Title>SkillJourney</Title>
                {firstAccess && <FirstAccessModal />}
                <HomeContent>
                    <Welcome>{getText('welcome') + ", "}{currentUser?.fullName}</Welcome>
                    <ObjectiveContent>
                        <TitleObjective>{getText("objectiveTitle")}</TitleObjective>
                        <ObjectiveText>{getText("objective")}</ObjectiveText>
                    </ObjectiveContent>
                    <p>Treinos recentes</p>
                    <RecentTrainings>
                        {!loading && getTrainings()}
                    </RecentTrainings>
                </HomeContent>
            </MainContent>
        </>
    );
}
