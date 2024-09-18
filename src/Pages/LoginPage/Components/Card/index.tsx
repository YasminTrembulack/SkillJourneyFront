
import Button from "../../../../Components/Button";
import { Content, StyledForm, StyledInput, StyledLabel, StyledLink, Text } from "./styles";

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
                    <StyledLink to={"/register"} children={"Não tenho uma conta"}/>
                    <Button/>
                </StyledForm>
            </Content>
        </>
    )
}