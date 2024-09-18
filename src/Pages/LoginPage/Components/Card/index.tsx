
import { Content, StyledButton, StyledForm, StyledInput, StyledLabel, Text } from "./styles";

export default function Card()
{
    return (
        <>
            <Content>
                <Text>LOGIN</Text>
                <StyledForm>
                    <StyledLabel children={"Email:"}/>
                    <StyledInput />
                    <StyledLabel children={"Senha:"}/>             
                    <StyledInput />
                    <StyledButton>Entrar</StyledButton>
                </StyledForm>
            </Content>
        </>
    )
}