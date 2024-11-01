import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: rgb(39, 71, 110);
  padding: 10px;
  /* margin-left: 60px; */
  /* border-radius: 20px; */
`;

export const Text = styled.p`
  font-weight: 500;
  color: #ffff;
  font-size: xx-large;
`;

export const Title = styled.h1`
  font-weight: 1000;
  color: #ffff;
  font-size: 50px;
  padding-top: 100px;
  padding-bottom: 150px;
`;

export const StyledForm = styled.form`
  border: 1px solid #fff;
  padding: 7%;
  width: 60%;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 100%;
  color: #001D4A;
  height: 30px;
  font-size: 20px;
  padding: 0px 10px;
  font-weight: 1000px;
  outline: none;
  &:focus {
    border: 2px solid #ce81cf;
    outline: none; 
  }
`;

export const StyledLabel = styled.p`
  width: 100%;
  color: #ffff;
  font-size: x-large;
  font-weight: 500px;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  width: 400px;
  text-decoration: underline;
  color: #d85cfa;
  cursor: pointer;
`

