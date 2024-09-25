import { useNavigate } from "react-router-dom";
import { StyledWrapper } from "./styles";

interface ISkill {
    id: string,
    name: string,
    description: string,
    type: string
}

export default function Card({ data }: { data: ISkill }) {
    const frontColor = data.type === 'SOFT' ? '#883c8f' : '#007BFF';
    const backColor = data.type === 'HARD' ? '#2fbdf5' : '#ad49b6'; 
    const borderColor = data.type === 'SOFT' ? '#883c8f' : '#007BFF'; 
    const backBorderColor = data.type === 'HARD' ? '#2fbdf5' : '#ad49b6'; 
    const navigate = useNavigate();

    return (
        <StyledWrapper onClick={() => navigate('/skills-details', { state: { data }} )}>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front" style={{backgroundColor: frontColor, borderColor: borderColor}}>
                        <p>{data.name}</p>
                    </div>
                    <div className="card-back" style={{backgroundColor: backColor, borderColor: backBorderColor}}>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};


