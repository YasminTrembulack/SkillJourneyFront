import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  width: 520px;
  height: 450px;
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
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 50px;
  width: 400px;
  color: #001D4A;
  height: 30px;
  font-size: 20px;
  padding: 0px 10px;
  font-weight: 1000px;
`;

export const StyledLabel = styled.p`
  width: 400px;
  font-weight: bold;
  color: #ffff;
  font-size: x-large;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  width: 400px;
  text-decoration: underline;
  color: #d85cfa;
  cursor: pointer;
`

