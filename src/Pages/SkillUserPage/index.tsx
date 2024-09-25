import { useEffect, useState } from "react";
import NavBarRole from "../../Components/NavBarRole";
import { MainContent, Table, TableData, TableHead, TableHeader, TableRow } from "./styles";
import { api } from "../../service/api";

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

    useEffect(() => {
        console.log("aaaaaaa");
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

                <Table>
                    <thead>
                        <TableHeader>
                            <TableHead>Usuário</TableHead>
                            <TableHead>Departamento</TableHead>
                            <TableHead>Valor</TableHead>
                        </TableHeader>
                    </thead>
                    <tbody>
                        {!loading &&
                            users.map(u => (
                                <>
                                    <TableRow>
                                        <TableData>{u.full_name}</TableData>
                                        <TableData>{u.departmentId}</TableData>
                                        <TableData>{u.value}</TableData>
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