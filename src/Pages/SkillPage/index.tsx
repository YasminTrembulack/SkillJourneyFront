import { useContext, useEffect, useState } from "react";
import { MainContent, Title, SkillContent } from "./styles";
import SkillCard from "../../Components/SkillCard";
import { LanguageContext } from "../../Context/language";
import { api } from "../../service/api";
import { getHeaders } from "../../service/headers";
import { ISkill } from "../../Types/interfaces";

export default function SkillPage() {
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);
    const [skills, setSkills] = useState<ISkill[]>([]);

    useEffect(() => {
        fetchSkills()
    }, []);

    async function fetchSkills() {
        setLoading(true);
        try {
            const response = await api.get(`/skill`, {
                headers: getHeaders()
            });
            console.log(response.data.data)
            setSkills(response.data.data);         
        } catch (error) {
            console.error("Error fetching trainings:", error);
        } finally {
            setLoading(false);
        }
    }

    function getSkills() {
        if (skills.length > 0) {
        
            return skills.map((s: ISkill) =>
    
                <SkillCard key={s.id} data={s}></SkillCard>
            )
        }
    }

    return (
        <>
            <MainContent>
                <Title>{getText('skills')}</Title>
                <SkillContent>
                    {!loading && getSkills()}
                </SkillContent>
            </MainContent>
        </>
    )
}