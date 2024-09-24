
import { useContext } from "react";
import Button from "../../../../Components/Button";
import { Content, StyledForm, StyledInput, StyledLabel, Text } from "./styles";
import { LanguageContext } from "../../../../Context/language";

export default function Card()
{
    const { getText } = useContext(LanguageContext);

    return (
        <>
            <Content>
                <Text>LOGIN</Text>
                <StyledForm>
                    <StyledLabel children={"Email:"}/>
                    <StyledInput type="email"/>
                    <StyledLabel children={getText("password") + ":"}/>             
                    <StyledInput type="password" />
                    <Button text={"Login"}/>
                </StyledForm>
            </Content>
        </>
    )
}