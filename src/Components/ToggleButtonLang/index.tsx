import { useContext } from "react";
import { StyledWrapper } from "./styles";
import { LanguageContext } from "../../Context/language";

export default function Switch() {

    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <StyledWrapper>
        <div className="checkbox-wrapper-8">
            <input type="checkbox" id="cb3-8" onClick={toggleLanguage} className="tgl tgl-skewed" />
            <label
            htmlFor="cb3-8"
            data-tg-on={language.toUpperCase()}
            data-tg-off={language.toUpperCase()}
            className="tgl-btn"
            />
        </div>
        </StyledWrapper>
    );
};
