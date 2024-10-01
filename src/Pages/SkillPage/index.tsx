import { useContext, useState } from "react";
import SkillTemp from "../../Temp/skills.json"
import { MainContent, Title, SkillContent } from "./styles";
import SkillCard from "../../Components/SkillCard";
import { LanguageContext } from "../../Context/language";

export default function SkillPage() {
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);


    function getSkills() {
        return SkillTemp.data.map(t =>

            <SkillCard data={t}></SkillCard>
        )
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