import React, { useContext } from 'react';
import { StyledSelect, StyledOption } from './styles'; // Ajuste o caminho conforme necessário
import { LanguageContext } from '../../Context/language';

interface DropdownProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string}[];
}

export const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options }) => {
    const {getText} = useContext(LanguageContext);
    
    return (
        <StyledSelect value={value} onChange={onChange} aria-required="true">
            <StyledOption value="" disabled>
                {getText("select") + ":"}
            </StyledOption>
            {options.map((option, index) => (
                <StyledOption key={index} value={option.value}>
                    {option.value}
                </StyledOption>
            ))}
        </StyledSelect>
    );
};
