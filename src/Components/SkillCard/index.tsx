import { useNavigate } from "react-router-dom";
import { StyledWrapper } from "./styles";
import { ISkill } from "../../Types/interfaces";

export default function Card({ data }: { data: ISkill }) {
    // const frontColor = data.type === 'SOFT' ? '#f1f1f3' : '#f1f1f3';
    const backColor = data.type === 'HARD' ? ' #ECA400' : '#5e3efc'; 
    const borderColor = data.type === 'SOFT' ? '#7257fa' : ' #ECA400'; 
    const backBorderColor = data.type === 'HARD' ? '#ECA400' : '#5e3efc'; 
    const navigate = useNavigate();

    return (
        <StyledWrapper onClick={() => navigate('/skills-details', { state: { data }} )}>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front" style={{ borderColor: borderColor}}>
                        <p>{data.name}</p>
                    </div>
                    <div className="card-back" style={{backgroundColor: backColor, borderColor: backBorderColor}}>
                        <p className="text-back">{data.description}</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};


