import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  border-radius: 0.75rem;
  padding: 2rem;
`;

export const StyledModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`;

export const StyledArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  resize: none;
`;

export const StyledSubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  
  &:hover {
    background-color: #218838;
    }
`;


