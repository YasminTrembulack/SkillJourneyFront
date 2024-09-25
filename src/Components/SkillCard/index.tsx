import { StyledWrapper } from "./styles";



export default function Card () {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>Front Side</p>
          </div>
          <div className="card-back">
            <p>Back Side</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};


