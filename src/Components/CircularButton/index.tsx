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
          backgroundColor: '#7257fa',
          '&:hover':{
            backgroundColor: '#5e3eff',
          }
        }} color="secondary" variant="extended" aria-label="add" onClick={onClick}>
            {children ? children : <></>} {text ? text: ""}
        </Fab>
        
    </>
  ) 
}