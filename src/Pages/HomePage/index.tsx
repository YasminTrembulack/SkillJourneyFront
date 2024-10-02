import { useContext, useEffect, useState } from "react";
import FirstAccessModal from "./Components/FirstAccessModal";
import { MainContent, Title, HomeContent, Welcome, ObjectiveContent, RecentTrainings, TitleObjective, ObjectiveText, TitleRecent, MainObjective, ObjectiveContainer, ObjectiveTextContainer, TitleDiv } from "./styles";
import { LanguageContext } from "../../Context/language";
import { UserContext } from "../../Context/user";
import { api } from "../../service/api";
import { getHeaders } from "../../service/headers";
import { ITraining } from "../../Types/interfaces";
import CardHome from "../../Components/CardHome";

export default function HomePage() {
    const [trainings, setTrainings] = useState<ITraining[]>([]);
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);
    const { firstAccess, currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser?.employeeId) {
            fetchTrainings();
        }
    }, [currentUser]);

    async function fetchTrainings() {
        setLoading(true);
        
        try {
                const response = await api.get(`/employee-training/employee/${currentUser?.employeeId}`, {
                    headers: getHeaders()
                });
                setTrainings(response.data.trainings); // Verifique se response.data.trainings é um array
            
        } catch (error) {
            console.error("Error fetching trainings:", error);
        } finally {
            setLoading(false);
            
        }
    }

    function getTrainings() {
        return trainings.map((training: ITraining) => 
            <CardHome key={training.id} data={training} />
        );
    }

    return (
        <>
            <MainContent>
                <Title>SkillJourney</Title>
                {firstAccess && <FirstAccessModal />}
                <HomeContent>
                    <Welcome>{getText('welcome') + ", "}{currentUser?.fullName}</Welcome>
                    <ObjectiveContainer>

                    <ObjectiveContent>
                        <TitleDiv>
                            <TitleObjective>{getText("objectiveTitle")}</TitleObjective>
                        </TitleDiv>
                        <ObjectiveTextContainer>
                            <ObjectiveText>{getText("objectivePT1")}</ObjectiveText>
                        </ObjectiveTextContainer>
                    </ObjectiveContent>
                    <ObjectiveContent>
                        <TitleDiv>
                            <MainObjective>{getText("mainObjective")}</MainObjective>

                        </TitleDiv>
                        <ObjectiveText>{getText("objectivePT4")}</ObjectiveText>
                        <ObjectiveText>{getText("objectivePT5")}</ObjectiveText>
                        <ObjectiveText>{getText("objectivePT6")}</ObjectiveText>
                        <ObjectiveText>{getText("objectivePT7")}</ObjectiveText>
                        <ObjectiveText>{getText("objectivePT8")}</ObjectiveText>
                    </ObjectiveContent>
                    </ObjectiveContainer>
                    <TitleRecent>{getText("recentTraining")}</TitleRecent>
                    <RecentTrainings>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            getTrainings()
                        )}
                    </RecentTrainings>
                </HomeContent>
            </MainContent>
        </>
    );
}
