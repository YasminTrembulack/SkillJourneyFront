import styled from 'styled-components';

export const TrainingContent = styled.div`
  width: 100%;
  display: grid;
  min-height: 625px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Ajuste o 200px conforme necessário */
  grid-template-rows: repeat(auto-fill, minmax(180px, 1fr)); 
  align-items: start;
  gap: 40px;
  padding-bottom: 45px;
  padding-top: 20px;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: 93vh;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Content = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: start;
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
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
  padding-top: 1%;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 250px;
`;