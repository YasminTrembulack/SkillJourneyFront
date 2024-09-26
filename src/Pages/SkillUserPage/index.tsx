import { useContext, useEffect, useState } from "react";
import NavBarRole from "../../Components/NavBarRole";
import { MainContent, Table, TableData, TableHead, TableHeader, TableRow } from "./styles.tsx";
import { api } from "../../service/api";
import { Title } from "../TrainingPage/styles";
import { LanguageContext } from "../../Context/language";

interface IUser {
    id: string;
    full_name: string;
    department: string;
    value: number;
}

interface IResponse {
    employees: IUser[];
}

export default function SkillUserPage() {
    const [role, serRole] = useState('MANAGER');
    const [users, setUsers] = useState<IResponse>({ employees: []});
    const [loading, setLoading] = useState(true);
    const id = "7dc5edd6-6aa1-44a7-96f7-6e517abbbfcc";
    const { getText } = useContext(LanguageContext);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`employee-skill/skill/${id}`)
                console.log(response.data);
                
                setUsers(response.data.employees);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <NavBarRole role={role} />
            <MainContent>
                <Title children={getText("employees")}/>
                <Table>
                    <thead>
                        <TableHeader>
                            <TableHead>Usuário</TableHead>
                            <TableHead>Departamento</TableHead>
                        </TableHeader>
                    </thead>
                    <tbody>
                        {!loading &&
                            users.map(u => (
                                <>
                                    <TableRow>
                                        <TableData>{u.full_name}</TableData>
                                        <TableData>{u.departmentId}</TableData>
                                    </TableRow>
                                </>
                            ))
                        }
                    </tbody>
                </Table>
            </MainContent>
        </>
    )
}