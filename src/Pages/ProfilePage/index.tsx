import { useContext } from "react";
import { MainContent, ProfileContent, Title } from "./styles";

import { LanguageContext } from "../../Context/language";


export default function ProfilePage() {
    const { getText } = useContext(LanguageContext);

    return (
        <>
            
            <MainContent>
                <Title>{getText('profile')}</Title>
                <ProfileContent>
                
                </ProfileContent>
            </MainContent>
        </>
    );
}
