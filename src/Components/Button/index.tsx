import { useNavigate } from "react-router-dom";
import { StyledButton, Text } from "./styles.tsx";

interface ButtonProps {
  text: string
}

export default function Button({text} : ButtonProps) {

  const navigate = useNavigate();

  return (
    <StyledButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        ></path>
      </svg>

      <Text>{text}</Text>
    </StyledButton>
  );
}
