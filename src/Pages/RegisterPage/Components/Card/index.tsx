
import { useEffect, useState } from "react";
import Button from "../../../../Components/Button";
import { Dropdown } from "../../../../Components/Dropdown";
import { Content, StyledForm, StyledInput, StyledLabel, Text } from "./styles";
import { api } from "../../../../service/api";

export default function Card() {
    const [accountType, setAccountType] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const list = [{ value: "ADM" }, { value: "MANAGER" }, { value: "EMPLOYEE" }];
    const [departments, setDepartments] = useState<departmentData[]>([]);

    interface departmentData {
        id: string,
        name: string
    }

    useEffect(() => {
        const getDepartments = async () => {
            try {
                const response = await api.get(`sjapi/department/`)
                setDepartments(response.data)
            } catch (error) {
                console.error(error);
                setDepartments([])
            }
        }
        getDepartments()
    }, [])

    const departmentOptions = departments.map(dep => ({
        value: dep.id,
        label: dep.name
    }));

    return (
        <>
            <Content>
                <Text>REGISTRO</Text>
                <StyledForm>
                    <StyledLabel children={"Nome completo:"} />
                    <StyledInput type="text" required />
                    <StyledLabel children={"Email:"} />
                    <StyledInput type="email" required />
                    <StyledLabel children={"Tipo de conta:"} />
                    <Dropdown value={accountType} onChange={(e) => setAccountType(e.target.value)} options={list} />
                    <StyledLabel children={"Data de nascimento"} />
                    <StyledInput type="date" />
                    <StyledLabel children={"Data de admissão:"} />
                    <StyledInput type="date" />
                    <StyledLabel children={"Cargo"} />
                    <StyledInput type="text" required />
                    <StyledLabel children={"Departamento:"} />
                    <Dropdown value={department} onChange={(e) => setDepartment(e.target.value)} options={departmentOptions} />
                    <StyledLabel children={"EDV"} />
                    <StyledInput type="text" required />
                    <Button />
                </StyledForm>
            </Content>
        </>
    )
}