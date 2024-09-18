import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  width: 520px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(39, 71, 110);
  padding: 10px;
  margin-left: 60px;
  border-radius: 20px;
`;

export const Text = styled.p`
  font-weight: 1000;
  color: #ffff;
  font-size: xx-large;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 50px;
  width: 400px;
  color: #001D4A;
  height: 25px;
`;

export const StyledLabel = styled.p`
  width: 400px;
  font-weight: bold;
  color: #ffff;
  font-size: x-large;
`;

export const StyledLink = styled(Link)`
  width: 400px;
  text-decoration: underline;
  color: #d85cfa;
  cursor: pointer;
`

