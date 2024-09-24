import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
`;

export const StyledCloseButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  width: 30px;  
  height: 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50%;  
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;

  &:hover {
    background-color: #e60000;
  }
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

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
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

const getStrengthColor = (strength: number) => {
    switch (strength) {
        case 0:
        case 1:
            return '#ff5454';
        case 2:
            return '#f7a148';
        case 3:
            return '#fff654';
        case 4:
            return '#48fa48';
        default:
            return 'grey';
    }
};

export const StrengthBar = styled.div<{ strength: number }>`
    background-color: ${(props) => getStrengthColor(props.strength)};
    height: 10px;
    width: ${(props) => `${props.strength * 25}%`};
    margin-top: 10px;
    transition: background-color 0.3s;
    border-radius: 5px;
`


