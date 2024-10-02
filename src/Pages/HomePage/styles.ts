import styled from 'styled-components';

export const HomeContent = styled.div`
  width: 60%;
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
  pointer-events: none;
  `

export const ObjectiveContent = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  padding: 15px;
  flex: 1;
  text-align: center;
`

export const TitleObjective = styled.h4`
  display: flex;
  font-weight: bold;
  font-size: larger;
  color: #ECA400;
`

export const RecentTrainings = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;

`

export const ObjectiveText = styled.p`
  font-size: large;
  font-weight: normal;
  text-align: start;
  padding-bottom: 10px;
`

export const TitleRecent = styled.p`
  font-size: larger;
  font-weight: bolder;
  padding: 10px;
`

export const MainObjective = styled.p`
    font-size: large;
    font-weight: bold;
    color: blueviolet;
`

export const ObjectiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #FFFFFF;
  border: solid white;
  border-radius: 5px;
`

export const ObjectiveTextContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
`