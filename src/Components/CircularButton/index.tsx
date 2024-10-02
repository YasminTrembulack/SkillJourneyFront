import { Fab } from "@mui/material";
import { ReactNode } from "react";

interface CircularButtonProps {
    children?: ReactNode;
    onClick?: () => void; 
    text: string | undefined
}

export default function CircularButton({ children, onClick, text }: CircularButtonProps){

  return(
    <>
        <Fab sx={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3aa00',
          '&:hover':{
            backgroundColor: '#ECA400',
          }
        }}variant="extended" aria-label="add" onClick={onClick}>
            {children ? children : <></>} {text ? text: ""}
        </Fab>
        
    </>
  ) 
}