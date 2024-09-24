import NavBar from "../../Components/NavBar";
import StyledLink from "../../Components/StyledLink";

export default function HomePage() {
  return (
    <>
      <NavBar>
        <StyledLink to="/" text="Home"></StyledLink>
        <StyledLink to="/" text="Skill"></StyledLink>
        <StyledLink to="/" text="Treinamentos"></StyledLink>
        <StyledLink to="/" text="Funcionários"></StyledLink>


      </NavBar>
    </>
  );
}
