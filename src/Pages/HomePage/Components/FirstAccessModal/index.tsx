import { SetStateAction, useState } from "react";
import { StyledModalOverlay, StyledModalContent, StyledForm, StyledInput, StyledSubmitButton, StrengthBar } from "./styles";
import { api } from "../../../../service/api";


export default function FirstAccessModal() {
    const userId = "12345";

    const [firstAccess, setFirstAccess] = useState(false);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [strength, setStrength] = useState(0);

    const closeModal = () => {
        setFirstAccess(false);
    }

    const calculateStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 6) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password != confirmPassword)
            return;

        const token = localStorage.getItem("token");

        const newPassword = {
            password: password
        };

        console.log(token)
        console.log(newPassword)

        try {
            const response = await api.post(`user/update/${userId}`, newPassword, {
                headers: {
                    auth: token
                }
            });
            // toast.success("Turma criada com sucesso!")
            console.log(response)

            closeModal();
        } catch (error) {
            // toast.error("Erro ao criar turma: " + error);
        }
    };


    return(
        <StyledModalOverlay>
                    <StyledModalContent>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledInput
                                type="password"
                                placeholder="Senha"
                                value={password}

                                onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
                                    setPassword(e.target.value)
                                    setStrength(calculateStrength(password));
                                }}
                                required
                            />
                            <StyledInput
                                type="password"
                                placeholder="Confirme a senha"
                                value={confirmPassword}
                                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <StrengthBar strength={strength} />
                            <StyledSubmitButton type="submit">Salvar</StyledSubmitButton>
                        </StyledForm>
                    </StyledModalContent>
            </StyledModalOverlay>

    )

}