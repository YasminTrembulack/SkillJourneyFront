import styled from 'styled-components';

export const TrainingContent = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); /* Ajuste o 200px conforme necessário */
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;