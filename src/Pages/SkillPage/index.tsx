import { useState } from "react";
import NavBarRole from "../../Components/NavBarRole";
import SkillTemp from "../../Temp/skills.json"
import { MainContent, TrainingContent } from "./styles";
import SkillCard from "../../Components/SkillCard";

export default function SkillPage() {
    const [role, serRole] = useState('MANAGER');

    const [loading, setLoading] = useState(false);

    function getSkills() {
        return SkillTemp.data.map(t =>

            <SkillCard></SkillCard>
        )
    }

    return (
        <>
            <NavBarRole role={role} />
            <MainContent>
                <TrainingContent>

                    {!loading && getSkills()}
                </TrainingContent>
            </MainContent>
        </>
    )
}