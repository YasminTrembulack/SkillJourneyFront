
import { useContext, useState } from "react";
import Button from "../../../../Components/Button";
import { Content, StyledForm, StyledInput, StyledLabel, Text, Title } from "./styles";
import { LanguageContext } from "../../../../Context/language";
import { api } from "../../../../service/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Context/user";
import { toast } from "react-toastify";

export default function Card() {
    const { getText } = useContext(LanguageContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { Login, setFirstAccess } = useContext(UserContext);

    async function handleLogin(e: { preventDefault: () => void; }) {
        e.preventDefault();
        try {
            const body = {
                email: email,
                password: password
            }
            
            const response = await api.post(`auth/login`, body);
            sessionStorage.setItem('@TOKEN', response.data.token);
            
            Login(response.data.token);
            setFirstAccess(response.data.firstAccess);
            
            toast.success(getText('loginSuccess'))
            navigate("/home");

        } catch (error) {  
            toast.error(getText('loginError'))
            console.error(getText('loginError'), error);
        }
    }

    return (
        <>
            <Content>
                <Title>SkillJourney</Title>
                <StyledForm onSubmit={handleLogin}>
                    <Text>LOGIN</Text>
                    <StyledLabel for="email_input" children={"Email:"} />
                    <StyledInput id="email_input" type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <StyledLabel for="password_input" children={getText("password") + ":"} />
                    <StyledInput id="password_input" type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <Button text={"Login"} />
                </StyledForm>
            </Content>
        </>
    )
}