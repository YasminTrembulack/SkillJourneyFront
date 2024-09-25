import { useContext, useState } from "react";
import { MainContent,EmployeeContent, Title } from "./styles";

import NavBarRole from "../../Components/NavBarRole";
import { LanguageContext } from "../../Context/language";


export default function EmployeePage() {

    const [role, serRole] = useState('MANAGER');
    const { getText } = useContext(LanguageContext);

    return (
        <>
            <NavBarRole role={role}/>
            <MainContent>
                <Title>{getText('employee')}</Title>
                <EmployeeContent>
                
                </EmployeeContent>
            </MainContent>
        </>
    );
}
