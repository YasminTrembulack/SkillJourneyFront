import Card from "./Components/Card";
import { StyledDiv, Image, ImgDiv } from "./styles";

export default function LoginPage() {
  return (
    <>
      <StyledDiv>
        <Card />
        <ImgDiv>
          <Image src="Skills.png" alt="" />
        </ImgDiv>
      </StyledDiv>
    </>
  );
}
