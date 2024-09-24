import React from 'react';
import { StyledSelect, StyledOption } from './styles'; // Ajuste o caminho conforme necessário

interface DropdownProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string}[];
}

export const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options }) => {
    return (
        <StyledSelect value={value} onChange={onChange} aria-required="true">
            <StyledOption value="" disabled>
                Selecione uma opção
            </StyledOption>
            {options.map((option, index) => (
                <StyledOption key={index} value={option.value}>
                    {option.value}
                </StyledOption>
            ))}
        </StyledSelect>
    );
};
