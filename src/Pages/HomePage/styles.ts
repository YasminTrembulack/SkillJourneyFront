import styled from 'styled-components';

export const HomeContent = styled.div`
  width: 75%;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  
  `;

export const Welcome = styled.h3`
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 15px;
  `

export const ObjectiveContent = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  padding: 15px;
`

export const TitleObjective = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: larger;
`

export const RecentTrainings = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Ajuste o 200px conforme necessário */
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
  padding: 15px;
`

export const ObjectiveText = styled.p`
  font-size: large;
  font-weight: normal;
`