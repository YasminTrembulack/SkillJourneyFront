import { SetStateAction, useContext, useState } from "react";
import { StyledModalOverlay, StyledModalContent, StyledForm, StyledInput, StyledSubmitButton, StrengthBar } from "./styles";
import { api } from "../../../../service/api";
import { UserContext } from "../../../../Context/user";
import { LanguageContext } from "../../../../Context/language";
import { toast } from 'react-toastify';
import { getHeaders } from "../../../../service/headers";

export default function FirstAccessModal() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [strength, setStrength] = useState(0);
    const { getText } = useContext(LanguageContext);
    const { setFirstAccess, currentUser } = useContext(UserContext);

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

        const payload = {
            password: password
        };

        console.log(payload)

        try {
            await api.patch(`user/update/${currentUser?.id}`, payload, {
                headers: getHeaders()
            });
            toast.success(getText('passwordChangedSuccess'));
            closeModal();
        } catch (err) {
            toast.error(getText('passwordChangedError') + err);
        }
    };


    return(
        <StyledModalOverlay>
                    <StyledModalContent>
                        <h3>{getText('changeYourPass')}:</h3>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledInput
                                type="password"
                                placeholder={getText('password')}
                                value={password}

                                onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
                                    setPassword(e.target.value)
                                    setStrength(calculateStrength(password));
                                }}
                                required
                            />
                            <StyledInput
                                type="password"
                                placeholder={getText('confirmPass')}
                                value={confirmPassword}
                                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <StrengthBar strength={strength} />
                            <StyledSubmitButton type="submit">{getText('save')}</StyledSubmitButton>
                        </StyledForm>
                    </StyledModalContent>
            </StyledModalOverlay>

    )

}