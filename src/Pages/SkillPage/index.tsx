import { useContext, useState } from "react";
import NavBarRole from "../../Components/NavBarRole";
import SkillTemp from "../../Temp/skills.json"
import { MainContent, Title, SkillContent } from "./styles";
import SkillCard from "../../Components/SkillCard";
import { LanguageContext } from "../../Context/language";

export default function SkillPage() {
    const [role, serRole] = useState('MANAGER');
    const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);


    function getSkills() {
        return SkillTemp.data.map(t =>

            <SkillCard data={t}></SkillCard>
        )
    }

    return (
        <>
            <NavBarRole role={role} />
            <MainContent>
                <Title>{getText('skills')}</Title>
                <SkillContent>

                    {!loading && getSkills()}
                </SkillContent>
            </MainContent>
        </>
    )
}