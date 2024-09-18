import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(39, 71, 110);
  padding: 10px;
  margin-left: 60px;
  border-radius: 10px;
`;

export const Text = styled.p`
  font-weight: 1000;
  color: #ffff;
  font-size: xx-large;
`;

export const StyledForm = styled.form`
  width: 520px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: 3px black solid;
  border-radius: 5px;
  width: 400px;
`;

export const StyledLabel = styled.p`
  font-weight: bold;
  color: #ffff;
  font-size: x-large;
`;

export const StyledLink = styled.a`

`

export const StyledButton = styled.button`
    cursor: pointer;
    width: 50px;
    height: 25px;
`
