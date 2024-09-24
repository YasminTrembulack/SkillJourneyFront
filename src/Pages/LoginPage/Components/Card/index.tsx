
import Button from "../../../../Components/Button";
import { Content, StyledForm, StyledInput, StyledLabel, Text } from "./styles";

export default function Card()
{
    return (
        <>
            <Content>
                <Text>LOGIN</Text>
                <StyledForm>
                    <StyledLabel children={"Email:"}/>
                    <StyledInput type="email"/>
                    <StyledLabel children={"Senha:"}/>             
                    <StyledInput type="password" />
                    <Button text={"Login"}/>
                </StyledForm>
            </Content>
        </>
    )
}