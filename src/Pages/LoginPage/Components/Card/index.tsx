
import { useContext, useEffect, useState } from "react";
import Button from "../../../../Components/Button";
import { Content, StyledForm, StyledInput, StyledLabel, Text, Title } from "./styles";
import { LanguageContext } from "../../../../Context/language";
import { api } from "../../../../service/api";
import { useNavigate } from "react-router-dom";

export default function Card() {
    const { getText } = useContext(LanguageContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function handleLogin(e: { preventDefault: () => void; }) {
        e.preventDefault();
        try {
            const body = {
                email: email,
                password: password
            }
            
            const response = await api.post(`auth/login`, body);
            sessionStorage.setItem('@TOKEN', response.data.token);

            navigate("/training");

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    return (
        <>
            <Content>
                <Title>SkillJourney</Title>
                <StyledForm onSubmit={handleLogin}>
                    <Text>LOGIN</Text>
                    <StyledLabel children={"Email:"} />
                    <StyledInput type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <StyledLabel children={getText("password") + ":"} />
                    <StyledInput type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <Button text={"Login"} />
                </StyledForm>
            </Content>
        </>
    )
}