import { StyledWrapper } from "./styles";
import { ITraining } from "../../Types/interfaces";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../Context/language";

export default function Card ( {data} : {data: ITraining})  {
  const [formattedDate, setFormattedDate] = useState<string>();

  const navigate = useNavigate();
  const { getText } =  useContext(LanguageContext);

  useEffect(() => {
    const date = new Date(data.createdAt);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    const formatte = `${day}/${month}/${year}`; // Ex: "02/10/2024"
    setFormattedDate(formatte);
  }, [data]);
  
  return (
    <StyledWrapper onClick={() => navigate('/training-details', { state: { data }} )}>
      <div className="card">
        <div  className="card__top">
          <h3 className="card__title">{data.name}</h3>
        </div>
          <div className="card__content">
            <p className="card__description">{data.description}</p>
          </div>
          <div  className="card__botton">
            <div className="card__date">{formattedDate}</div>
            <div className="card__date">-</div>
            <p className="card__date">{data.duration} {getText('hours')}</p>
          </div>

        <div className="card__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="15"
            width="15"
          >
            <path
              fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};
