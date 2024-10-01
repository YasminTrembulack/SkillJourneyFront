import styled from 'styled-components';

export const TrainingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Ajuste o 200px conforme necessário */
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 75%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Aside = styled.div`
  width: 12.5%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 2%;
`;

export const TopContent = styled.div`
  width: 100%;
  min-height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;