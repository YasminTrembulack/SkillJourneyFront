import { useContext } from "react";
import { MainContent,EmployeeContent, Title } from "./styles";

import { LanguageContext } from "../../Context/language";


export default function EmployeePage() {

    const { getText } = useContext(LanguageContext);

    return (
        <>
            <MainContent>
                <Title>{getText('employees')}</Title>
                <EmployeeContent>
                
                </EmployeeContent>
            </MainContent>
        </>
    );
}
