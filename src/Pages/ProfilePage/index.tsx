import { useContext, useState } from "react";
import { MainContent, ProfileContent, Title } from "./styles";

import NavBarRole from "../../Components/NavBarRole";
import { LanguageContext } from "../../Context/language";


export default function ProfilePage() {

    const [role, serRole] = useState('MANAGER');
    const { getText } = useContext(LanguageContext);

    return (
        <>
            <NavBarRole role={role}/>
            <MainContent>
                <Title>{getText('profile')}</Title>
                <ProfileContent>
                
                </ProfileContent>
            </MainContent>
        </>
    );
}
