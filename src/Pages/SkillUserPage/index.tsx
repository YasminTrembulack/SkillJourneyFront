import { useContext, useEffect, useState } from "react";
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
            <MainContent>
                <Title children={getText("employees")}/>
                <Table>
                    <thead>
                        <TableHeader>
                            <TableHead>{getText("employees")}</TableHead>
                            <TableHead>{getText("departments")}</TableHead>
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