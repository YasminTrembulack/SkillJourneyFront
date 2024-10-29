import { Fab } from "@mui/material";
import { ReactNode } from "react";

interface CircularButtonProps {
    children?: ReactNode;
    onClick?: () => void; 
    text: string | undefined;
}

export default function SubscribeButton({ children, onClick, text }: CircularButtonProps) {
    return (
        <Fab
            sx={{
                color: 'white',
                width: '140px',
                position: 'fixed',
                height: '40px',
                top: '90px',
                right: '20px', // Ajuste a posição para a direita
                zIndex: 100,
                backgroundColor: '#00c2f3',
                '&:hover': {
                    backgroundColor: '#00c2f3',
                },
                '@media (max-width: 768px)': {
                    right: '10px', // Ajuste para telas menores
                },
            }}
            variant="extended"
            aria-label="add"
            onClick={onClick}
        >
            {children ? children : <></>} {text ? text : ""}
        </Fab>
    );
}
