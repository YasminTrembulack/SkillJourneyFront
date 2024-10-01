import { useContext, useState } from "react";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Image } from "./styles";
import { LanguageContext } from "../../Context/language";

export default function SelectLanguage(){

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { language, toggleLanguage } = useContext(LanguageContext);
  
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChangeLang(){
    toggleLanguage();
    setAnchorEl(null);

  }


  return(
    <>
        <Image src={`icon-${language}.png`} onClick={handleClick} />
        <Menu
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            sx={{
            '& .MuiPaper-root': {
                backgroundColor: '#27476e', // Muda a cor de fundo
                color: 'white',
                marginTop: '13px'         // Muda a cor do texto
            },
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            { language !== 'pt' &&
                <MenuItem style={{gap: "10px"}} onClick={handleChangeLang}>
                    <ListItemIcon>
                        <Image src="icon-pt.png" alt="Brazil flag" />
                    </ListItemIcon>
                    Pt-Br
                </MenuItem>
            }
            { language !== 'en' &&
                <MenuItem style={{gap: "10px"}} onClick={handleChangeLang}>
                    <ListItemIcon>
                        <Image src="icon-en.png" alt="USA flag" />
                    </ListItemIcon>
                    English
                </MenuItem>
            }
        </Menu>
    </>
  ) 
}