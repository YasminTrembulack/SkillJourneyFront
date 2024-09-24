
import Button from "../../../../Components/Button";
import { Content, StyledForm, StyledInput, StyledLabel, Text } from "./styles";

export default function Card()
{
    return (
        <>
            <Content>
                <Text>REGISTRO</Text>
                <StyledForm>
                    <StyledLabel children={"Nome completo:"}/>
                    <StyledInput type="text"/>
                    <StyledLabel children={"Data de nascimento"}/>             
                    <StyledInput type="date" />
                    <StyledLabel children={"Data de admissão:"}/>
                    <StyledInput type="date"/>
                    <StyledLabel children={"Cargo"}/>             
                    <StyledInput type="date" />
                    <StyledLabel children={"Departamento:"}/>
                    <StyledInput type="text"/>
                    <StyledLabel children={"EDV"}/>             
                    <StyledInput type="text" />
                    <Button/>
                </StyledForm>
            </Content>
        </>
    )
}